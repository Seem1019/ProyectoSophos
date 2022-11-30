import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { normalizeKey } from '@/utils'

import { getGame } from '@/api/games'
import { ItemView, ItemListView } from '@/components/Atoms'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'

export const ViewGame = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useQuery(['game', id], () =>
    getGame(id as string)
  )

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  const items = Object.entries(data)
    .map(([key, value]) => {
      if (key.includes('Id') || key.includes('Platforms')) return null
      if (typeof value === 'object') return null
      return { key: normalizeKey(key), value }
    })
    .filter(Boolean)

  const lists = Object.entries(data)
    .map(([key, value]) => {
      if (key === 'platforms')
        return {
          key: normalizeKey(key),
          value: value.split(',')
        }
    })
    .filter(Boolean)

  return (
    <section>
      <h1 className="text-4xl font-medium">Game Info</h1>
      <div className="flex flex-wrap gap-x-20 gap-y-8 mt-8">
        {items.map((item: any) => (
          <ItemView key={item.key} title={item.key} value={item.value} />
        ))}
        {lists.map((list: any) => (
          <ItemListView key={list.key} title={list.key} value={list.value} />
        ))}
      </div>
    </section>
  )
}
