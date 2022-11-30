import type { User } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { getCustomers, deleteCustomer } from '@/api/customers'

import { Button } from '@/components/Button'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'
import { CustomerItem } from '@/components/Customer'
import { ReactComponent as PlusIcon } from '@/assets/plus.svg'

export const ListCustomers = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data, isLoading, isError, error } = useQuery(
    ['customers'],
    getCustomers
  )
  const { mutate } = useMutation(deleteCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['customers'])
    }
  })

  const handleDelete = (id: string) => mutate(id)

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section>
      <div className="flex flex-wrap justify-between items-start gap-5">
        <h1 className="text-4xl font-medium">Users</h1>
        <Button
          text="Add Customer"
          Icon={PlusIcon}
          action={() => navigate('/users/add')}
        />
      </div>
      <div className="flex flex-wrap justify-around gap-8 mt-8">
        {data.map((customer: User) => (
          <CustomerItem
            key={customer.IdUser}
            customer={customer}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  )
}
