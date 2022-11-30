import { useQuery } from '@tanstack/react-query'
import { getFrequentUsers, getPopularGames } from '@/api/metrics'

import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'
import { MostPopularGames } from './PopularGame'
import { MostFrequentUsers } from './FrequentUser'

export const Metrics = () => {
  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    error: errorUsers
  } = useQuery(['frequent_users'], getFrequentUsers)

  const {
    data: games,
    isLoading: isLoadingGames,
    isError: isErrorGames,
    error: errorGames
  } = useQuery(['popular_games'], getPopularGames)

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-medium">Extra Info</h1>
      <div className="grid md:grid-cols-[0.8fr_0.02fr_1fr] gap-6">
        {isLoadingUsers ? (
          <LoadingView />
        ) : isErrorUsers ? (
          <ErrorView message={(errorUsers as Error)?.message} />
        ) : (
          <MostFrequentUsers users={users} />
        )}
        <div className="w-full md:w-0 h-0 md:h-full border-2 border-gray-500"></div>
        {isLoadingGames ? (
          <LoadingView />
        ) : isErrorGames ? (
          <ErrorView message={(errorGames as Error)?.message} />
        ) : (
          <MostPopularGames games={games} />
        )}
      </div>
    </section>
  )
}
