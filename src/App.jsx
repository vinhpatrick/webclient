import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './scss/style.scss'
import './App.css'
import Seller from './admin/Seller'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/home' element={<Navigate to='/' replace />} /> */}
        <Route path='/products/'>
          <Route index element={<div>All products page</div>} />
          <Route path=':productId' element={<ProductDetail />} />
        </Route>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/seller/*' element={<Seller />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
