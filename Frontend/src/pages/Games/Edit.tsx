import type { Game } from '@/types'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getGame, updateGame } from '@/api/games'
import { GAMES } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'

export const EditGame = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery(['game', id], () =>
    getGame(id as string)
  )
  const { mutate } = useMutation(updateGame, {
    onSuccess: () => {
      navigate('/games')
    }
  })

  function handleSubmit(game: Game) {
    mutate(game)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-center text-4xl font-medium">Edit Game</h1>
      <Form
        fields={GAMES}
        values={data}
        onSubmit={handleSubmit}
        buttonLabel="Update Game"
      />
    </section>
  )
}
