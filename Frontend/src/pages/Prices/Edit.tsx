import type { Price } from '@/types'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getPrice, updatePrice } from '@/api/prices'
import { PRICES } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'

export const EditPrice = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery(['price', id], () =>
    getPrice(id as string)
  )
  const { mutate } = useMutation(updatePrice, {
    onSuccess: () => {
      navigate('/prices')
    }
  })

  function handleSubmit(price: Price) {
    mutate(price)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-center text-4xl font-medium">Edit Price</h1>
      <Form
        fields={PRICES}
        values={data}
        onSubmit={handleSubmit}
        buttonLabel="Update Price"
      />
    </section>
  )
}
