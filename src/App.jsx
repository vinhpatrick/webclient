import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import './scss/style.scss'
import './App.css'
import Seller from './admin/Seller'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Navigate to='/' replace />} />
        <Route path='/products/'>
          <Route index element={<div>All products page</div>} />
          <Route path=':productId' element={<ProductDetail />} />
        </Route>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/seller/*' element={<Seller />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
