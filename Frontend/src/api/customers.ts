import { User } from '@/types'
import { API_URL } from './utils'

export async function getCustomers() {
  const res = await fetch(`${API_URL}/Users`)
  return await res.json() as User[]
}

export async function getCustomer(id: string) {
  const res = await fetch(`${API_URL}/Users/${id}`)
  return await res.json() as User
}

export async function createCustomer(customer: User) {
  const res = await fetch(`${API_URL}/Users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
  return await res.json() as User
}

export async function updateCustomer(customer: User) {
  const res = await fetch(`${API_URL}/Users/${customer.idUser}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
  return await res.json() as User
}

export async function deleteCustomer(id: string) {
  const res = await fetch(`${API_URL}/Users/${id}`, {
    method: 'DELETE'
  })
  return await res.json() as User
}
