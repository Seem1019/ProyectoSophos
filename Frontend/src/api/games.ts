import type { VideoGame } from '@/types'
import { API_URL } from './utils'

export async function getGames() {
  const res = await fetch(`${API_URL}/VideoGames`)
  return await res.json() as VideoGame[]
}

export async function getGame(id: string) {
  const res = await fetch(`${API_URL}/VideoGames/${id}`)
  return await res.json() as VideoGame
}

export async function createGame(game: VideoGame) {
  const res = await fetch(`${API_URL}/VideoGames`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(game)
  })
  return await res.json() as VideoGame
}

export async function updateGame(game: VideoGame) {
  const res = await fetch(`${API_URL}/VideoGames/${game.idGame}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(game)
  })
  return await res.json() as VideoGame
}

export async function deleteGame(id: string) {
  const res = await fetch(`${API_URL}/VideoGames/${id}`, {
    method: 'DELETE'
  })
  return await res.json() as VideoGame
}
