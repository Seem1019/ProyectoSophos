import type { Game } from '@/types'
import { Link } from 'react-router-dom'

export interface IMostPopularGamesProps {
  games: Game[]
}

export const MostPopularGames = ({ games }: IMostPopularGamesProps) => {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-blue-400 text-3xl">Most Popular Games</h1>
      <ul className="flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
        {games.map((game) => (
          <li key={game.IdGame}>
            <Link
              to={`/games/${game.IdGame}`}
              className="flex gap-2 px-3 py-3 hover:bg-blue-600/40"
            >
              <img
                src={game.CoverPage}
                alt={game.NameGame}
                className="w-36 h-36 object-cover object-top"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl">{game.NameGame}</h2>
                <p className="text-xl font-light">by {game.Brand}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
