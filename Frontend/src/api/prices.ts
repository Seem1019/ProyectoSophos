import type { Price } from '@/types'
import { API_URL } from './utils'

export async function getPrices() {
  const res = await fetch(`${API_URL}/Prices`)
  return await res.json() as Price[]
}

export async function getPrice(id: string) {
  const res = await fetch(`${API_URL}/Prices/${id}`)
  return await res.json() as Price
}

export async function createPrice(price: Price) {
  const res = await fetch(`${API_URL}/Prices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(price)
  })
  return await res.json() as Price
}

export async function updatePrice(price: Price) {
  const res = await fetch(`${API_URL}/Prices`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(price)
  })
  return await res.json() as Price
}
