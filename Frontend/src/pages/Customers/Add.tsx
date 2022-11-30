import type { User } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { generateUUID } from '@/utils'
import { createCustomer } from '@/api/customers'
import { CUSTOMERS } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'

export const AddCustomer = () => {
  const navigate = useNavigate()
  const { mutate, isLoading, isError, error } = useMutation(createCustomer, {
    onSuccess: () => {
      navigate('/users')
    }
  })

  function handleSubmit(customer: User) {
    customer.IdUser = generateUUID()
    mutate(customer)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-center text-4xl font-medium">Add User</h1>
      <Form
        fields={CUSTOMERS}
        onSubmit={handleSubmit}
        buttonLabel="Add User"
      />
    </section>
  )
}
