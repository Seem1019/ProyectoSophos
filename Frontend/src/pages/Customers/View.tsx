import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getRentalGame } from '@/api/rentals'
import { getCustomer } from '@/api/customers'

import { normalizeKey } from '@/utils'
import { ItemListView, ItemView } from '@/components/Atoms'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'

export const ViewCustomer = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useQuery(['customer', id], () =>
    getCustomer(id as string)
  )

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  const items = Object.entries(data)
    .map(([key, value]) => {
      if (key.includes('Id')) return null
      if (typeof value === 'object') return null
      return { key: normalizeKey(key), value }
    })
    .filter(Boolean)

  const lists = Object.entries(data)
    .map(([key, value]) => {
      if (typeof value !== 'object') return null
      return { key: normalizeKey(key), value }
    })
    .filter(Boolean)

  return (
    <section>
      <h1 className="text-4xl font-medium">User Info</h1>
      <div className="flex flex-wrap gap-x-20 gap-y-8 mt-8">
        {items.map((item: any) => (
          <ItemView key={item.key} title={item.key} value={item.value} />
        ))}
        {lists.map((list: any) => (
          <ItemListView
            key={`list-${list.key}`}
            title={list.key}
            value={list.value}
            Extra={RentalGame}
          />
        ))}
      </div>
    </section>
  )
}

type RentalProps = { id: string }
const RentalGame = ({ id }: RentalProps) => {
  const { data, isLoading, isError, error } = useQuery(['game', id], () =>
    getRentalGame(id)
  )

  if (isLoading) return <LoadingView />
  if (isError) return <ErrorView message={(error as Error)?.message} />

  return (
    <img
      className="w-32 h-32 object-cover object-top"
      src={data.CoverPage}
      alt={data.NameGame}
    />
  )
}
