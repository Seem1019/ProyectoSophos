import type { Rental } from '@/types'
import { API_URL } from './utils'
import { getGame } from './games'
import { getCustomer } from './customers'

export async function getRentals() {
  const res = await fetch(`${API_URL}/Rentals`)
  return await res.json() as Rental[]
}

export async function getRental(id: string) {
  const res = await fetch(`${API_URL}/Rentals/${id}`)
  return await res.json() as Rental
}

export async function createRental(rental: Rental) {
  const res = await fetch(`${API_URL}/Rentals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rental)
  })
  return await res.json() as Rental
}

export async function getRentalCustomer(id: string) {
  const customer = getCustomer(id)
  return await customer
}

export async function getRentalGame(id: string) {
  const game = getGame(id)
  return await game
}
