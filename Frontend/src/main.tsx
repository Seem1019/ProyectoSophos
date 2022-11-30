import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  ListCustomers,
  ViewCustomer,
  AddCustomer,
  EditCustomer
} from '@/pages/Customers'
import { ListGames, ViewGame, AddGame, EditGame } from '@/pages/Games'
import { ListRentals, AddRental, EditRental } from '@/pages/Rentals'
import { ListPrices, AddPrice, EditPrice } from '@/pages/Prices'
import { Metrics } from '@/pages/Metrics'

import { Layout } from './Layout'
import { NotFoundView } from '@/components/State/NotFound'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="games">
            <Route index element={<ListGames />} />
            <Route path="add" element={<AddGame />} />
            <Route path=":id" element={<ViewGame />} />
            <Route path="edit/:id" element={<EditGame />} />
          </Route>

          <Route path="users">
            <Route index element={<ListCustomers />} />
            <Route path="add" element={<AddCustomer />} />
            <Route path=":id" element={<ViewCustomer />} />
            <Route path="edit/:id" element={<EditCustomer />} />
          </Route>

          <Route path="rentals">
            <Route index element={<ListRentals />} />
            <Route path="add" element={<AddRental />} />
            <Route path="edit/:id" element={<EditRental />} />
          </Route>

          <Route path="prices">
            <Route index element={<ListPrices />} />
            <Route path="add" element={<AddPrice />} />
            <Route path="edit/:id" element={<EditPrice />} />
          </Route>

          <Route path="info">
            <Route index element={<Metrics />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
