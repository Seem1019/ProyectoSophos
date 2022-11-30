import type { Rental } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { generateUUID } from '@/utils'
import { createRental } from '@/api/rentals'
import { RENTALS } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { LoadingView } from '@/components/State/Loading'
import { ErrorView } from '@/components/State/Error'

export const AddRental = () => {
  const navigate = useNavigate()
  const { mutate, isLoading, isError, error } = useMutation(createRental, {
    onSuccess: () => {
      navigate('/rentals')
    }
  })

  function handleSubmit(rental: Rental) {
    rental.IdRent = generateUUID()
    mutate(rental)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-center text-4xl font-medium">Add Rental</h1>
      <Form fields={RENTALS} onSubmit={handleSubmit} buttonLabel="Add Rental" />
    </section>
  )
}
