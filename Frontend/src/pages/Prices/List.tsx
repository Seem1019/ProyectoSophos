import type { Price } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getFormattedPrice } from '@/utils'
import { getPrices } from '@/api/prices'
import { getGame } from '@/api/games'

import { Button } from '@/components/Button'
import { ActionButton } from '@/components/Atoms'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'
import { ReactComponent as PlusIcon } from '@/assets/plus.svg'
import { ReactComponent as EditIcon } from '@/assets/edit.svg'

export const ListPrices = () => {
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery(['prices'], getPrices)

  return (
    <section>
      <div className="flex flex-wrap justify-between items-start gap-5">
        <h1 className="text-4xl font-medium">Prices</h1>
        <Button
          text="Add Price"
          Icon={PlusIcon}
          action={() => navigate('/prices/add')}
        />
      </div>
      {isLoading ? (
        <LoadingView />
      ) : isError ? (
        <ErrorView message={(error as Error)?.message} />
      ) : (
        <div className="flex flex-col gap-10 mt-8">
          {data.map((price: Price) => (
            <PriceInfo key={price.IdPrice} price={price} />
          ))}
        </div>
      )}
    </section>
  )
}

const PriceInfo = ({ price }: { price: Price }) => {
  const { data: game, isSuccess: successGame } = useQuery(
    ['game', price.IdVideoGames],
    () => getGame(price.IdVideoGames)
  )

  return (
    <div key={price.IdPrice} className="flex justify-between items-end gap-10">
      {successGame ? (
        <div className="text-xl">
          <span>Game Name</span>
          <p className="text-blue-300 text-2xl font-semibold">
            {game.nameGame}
          </p>
        </div>
      ) : (
        <LoadingView />
      )}
      <div className="text-xl">
        <span>Price</span>
        <p className="text-blue-300 text-2xl font-medium">
          {getFormattedPrice(price.Amount)}
        </p>
      </div>
      <div className="text-xl">
        <span>Penalty</span>
        <p className="text-blue-300 text-2xl font-medium">
          {getFormattedPrice(price.PricePenalty)}
        </p>
      </div>
      <ActionButton
        size="medium"
        intent="warning"
        Icon={EditIcon}
        route={`/prices/edit/${price.IdPrice}`}
      />
    </div>
  )
}
