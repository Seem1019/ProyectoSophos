import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavBar } from '@/components/NavBar'

export function Layout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/') {
      navigate('/games')
    }
  }, [])

  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavBar />
      <Outlet />
    </QueryClientProvider>
  )
}
