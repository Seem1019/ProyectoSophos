import type { VideoGame, User } from '@/types'
import { API_URL } from './utils'
import { getGame } from './games'
import { getCustomer } from './customers'

export async function getFrequentUsers() {
  const res = await fetch(`${API_URL}/get_customer_freq`)
  const customers = await res.json() as string[]
  const frequentUsers = await Promise.all(customers.map((id) => getCustomer(id)))
  return frequentUsers as User[]
}

export async function getPopularGames() {
  const res = await fetch(`${API_URL}/most_popular_videogames`)
  const games = await res.json() as string[]
  const popularGames = await Promise.all(games.map((id) => getGame(id)))
  return popularGames as VideoGame[]
}
