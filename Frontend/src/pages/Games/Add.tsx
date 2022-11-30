import type { Game } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { generateUUID } from '@/utils'
import { createGame } from '@/api/games'
import { GAMES } from '@/utils/InputFields'

import { Form } from '@/components/Form'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'

export const AddGame = () => {
  const navigate = useNavigate()
  const { mutate, isLoading, isError, error } = useMutation(createGame, {
    onSuccess: () => {
      navigate('/games')
    }
  })

  function handleSubmit(game: Game) {
    game.IdGame = generateUUID()
    mutate(game)
  }

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-center text-4xl font-medium">Add Game</h1>
      <Form fields={GAMES} onSubmit={handleSubmit} buttonLabel="Add Game" />
    </section>
  )
}
