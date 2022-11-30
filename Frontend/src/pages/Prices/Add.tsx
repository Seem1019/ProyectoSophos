import type { Price } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { generateUUID } from '@/utils'
import { createPrice } from '@/api/prices'
import { PRICES } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { LoadingView } from '@/components/State/Loading'
import { ErrorView } from '@/components/State/Error'

export const AddPrice = () => {
  const navigate = useNavigate()
  const { mutate, isLoading, isError, error } = useMutation(createPrice, {
    onSuccess: () => {
      navigate('/prices')
    }
  })

  function handleSubmit(price: Price) {
    price.IdPrice = generateUUID()
    mutate(price)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-center text-4xl font-medium">Add Price</h1>
      <Form fields={PRICES} onSubmit={handleSubmit} buttonLabel="Add Price" />
    </section>
  )
}
