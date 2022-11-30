import type { Rental } from '@/types'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getRental, createRental } from '@/api/rentals'
import { RENTALS } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { LoadingView } from '@/components/State/Loading'
import { ErrorView } from '@/components/State/Error'

export const EditRental = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery(['rental', id], () =>
    getRental(id as string)
  )
  const { mutate } = useMutation(createRental, {
    onSuccess: () => {
      navigate('/rentals')
    }
  })

  function handleSubmit(rental: Rental) {
    mutate(rental)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-center text-4xl font-medium">Edit Rental</h1>
      <Form
        fields={RENTALS}
        values={data}
        onSubmit={handleSubmit}
        buttonLabel="Edit Rental"
      />
    </section>
  )
}
