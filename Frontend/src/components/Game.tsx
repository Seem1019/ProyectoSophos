import type { VideoGame } from '@/types'
import { ActionButton } from "./Atoms"
import { ReactComponent as ViewIcon } from '@/assets/view.svg'
import { ReactComponent as TrashIcon } from '@/assets/trash.svg'
import { ReactComponent as EditIcon } from '@/assets/edit.svg'

export interface IGameProps {
  game: VideoGame
  onDelete: (id: string) => void
}

export const GameItem = ({ game, onDelete }: IGameProps) => {
  return (
    <article className="flex flex-col gap-2 max-w-[300px] w-full bg-neutral-900 rounded-md">
      <img
        className="w-full h-60 aspect-square object-cover object-top rounded-t-md"
        src={game.coverPage}
        alt={game.nameGame}
      />
      <div className="flex flex-col justify-between gap-4 h-full px-4 pt-2 pb-5">
        <div>
          <p className="text-blue-400 text-2xl font-semibold">
            {game.nameGame}
          </p>
          <p className="text-lg">{game.director}</p>
          <p>{game.releaseDate}</p>
        </div>
        <div className="flex gap-2">
          <ActionButton Icon={ViewIcon} route={`/games/${game.idGame}`} />
          <ActionButton intent="warning" Icon={EditIcon} route={`/games/edit/${game.idGame}`} />
          <ActionButton intent="danger" Icon={TrashIcon} action={() => onDelete(game.idGame)} />
        </div>
      </div>
    </article>
  )
}
