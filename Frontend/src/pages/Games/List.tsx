import type { Game, Option } from '@/types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { fuzzySearch } from '@/utils/fuzzySearch'
import { getGames, deleteGame } from '@/api/games'
import { normalizeKey } from '@/utils'

import { Button } from '@/components/Button'
import { GameItem } from '@/components/Game'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'
import { SingleSelect } from '@/components/Form/SingleSelect'
import { ReactComponent as PlusIcon } from '@/assets/plus.svg'

const searchKeys = ['Director', 'Producer', 'MainCharacter', 'Brand'] as const
type SearchKey = typeof searchKeys[number]
export const ListGames = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [searchKey, setSearchKey] = useState('')
  const [records, setRecords] = useState<Game[]>([])

  const { data, isLoading, isError, error } = useQuery(['games'], getGames)
  const { mutate } = useMutation(deleteGame, {
    onSuccess: () => {
      queryClient.invalidateQueries(['games'])
    }
  })

  useEffect(() => {
    if (data) setRecords(data)
  }, [data])

  const handleDelete = (id: string) => mutate(id)

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  function handleSearch(event: React.FormEvent<HTMLInputElement>) {
    const search = event.currentTarget.value.toLowerCase()
    const filteredRecords = data?.filter((record) =>
      fuzzySearch(search, record[searchKey as SearchKey].toLowerCase())
    )
    setRecords(search ? (filteredRecords as Game[]) : (data as Game[]))
  }

  function handleChange(value: Option) {
    setSearchKey(value.value)
  }

  function setOption(value: string) {
    return { label: normalizeKey(value), value }
  }

  return (
    <section>
      <div className="flex flex-wrap justify-between items-start gap-10">
        <h1 className="text-4xl font-medium">Games</h1>
        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            name="game-search"
            className="w-72 md:w-96 h-12 px-4 py-2.5 bg-dark border-2 border-gray-300 rounded-md text-lg placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-dark focus:transition-shadow"
            placeholder={`Search by ${searchKeys
              .map((key) => key.toLowerCase())
              .join(', ')}`}
            onInput={handleSearch}
          />
          <SingleSelect
            name="search-key"
            className="w-44"
            placeholder="Search by"
            options={searchKeys.map(setOption)}
            onChange={handleChange}
          />
          <Button
            text="Add Game"
            Icon={PlusIcon}
            action={() => navigate('/games/add')}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-8 mt-8">
        {records.map((game: Game) => (
          <GameItem key={game.IdGame} game={game} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  )
}
