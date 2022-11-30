import type { User } from '@/types'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getCustomer, updateCustomer } from '@/api/customers'
import { CUSTOMERS } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'

export const EditCustomer = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery(['customer', id], () =>
    getCustomer(id as string)
  )
  const { mutate } = useMutation(updateCustomer, {
    onSuccess: () => {
      navigate('/users')
    }
  })

  function handleSubmit(customer: User) {
    mutate(customer)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-center text-4xl font-medium">Edit User</h1>
      <Form
        fields={CUSTOMERS}
        values={data}
        onSubmit={handleSubmit}
        buttonLabel="Update User"
      />
    </section>
  )
}
