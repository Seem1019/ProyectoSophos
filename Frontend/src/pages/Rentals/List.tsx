import type { Rental } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getRentals, getRentalCustomer, getRentalGame } from '@/api/rentals'

import { Button } from '@/components/Button'
import { ActionButton } from '@/components/Atoms'
import { ErrorView } from '@/components/State/Error'
import { LoadingView } from '@/components/State/Loading'
import { ReactComponent as PlusIcon } from '@/assets/plus.svg'
import { ReactComponent as EditIcon } from '@/assets/edit.svg'

export const ListRentals = () => {
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery(['rentals'], getRentals)

  return (
    <section>
      <div className="flex flex-wrap justify-between items-start gap-5">
        <h1 className="text-4xl font-medium">Rentals</h1>
        <Button
          text="Add Rent"
          Icon={PlusIcon}
          action={() => navigate('/rentals/add')}
        />
      </div>
      {isLoading ? (
        <LoadingView />
      ) : isError ? (
        <ErrorView message={(error as Error)?.message} />
      ) : (
        <div className="flex flex-col gap-8 mt-8">
          {data.map((rental: Rental) => (
            <RentalInfo key={rental.IdRent} rental={rental} />
          ))}
        </div>
      )}
    </section>
  )
}

const RentalInfo = ({ rental }: { rental: Rental }) => {
  const { data: customer, isSuccess: successCustomer } = useQuery(
    ['customer', rental.IdUserRental],
    () => getRentalCustomer(rental.IdUserRental)
  )
  const { data: game, isSuccess: successGame } = useQuery(
    ['game', rental.IdVideoGamesRental],
    () => getRentalGame(rental.IdVideoGamesRental)
  )

  return (
    <div
      key={rental.IdRent}
      className="flex flex-wrap justify-between items-center"
    >
      {successCustomer && successGame ? (
        <div className="text-lg">
          <p className="text-blue-300 text-2xl font-semibold">
            {game.nameGame}
          </p>
          <p>
            <span>Rented by </span>
            <span className="text-blue-300 text-xl font-medium">
              {customer.FullName}
            </span>
          </p>
        </div>
      ) : (
        <LoadingView />
      )}
      <div className="basis-1/2 flex justify-between items-center">
        <div className="text-lg">
          <p>
            <span>From </span>
            <span className="text-blue-300 text-2xl font-medium">
              {rental.RentalDate}
            </span>
          </p>
          <p>
            <span>Until </span>
            <span className="text-blue-300 text-2xl font-medium">
              {rental.RentalEndDate}
            </span>
          </p>
        </div>
        <ActionButton
          size="medium"
          intent="warning"
          Icon={EditIcon}
          route={`/rentals/edit/${rental.IdRent}`}
        />
      </div>
    </div>
  )
}
