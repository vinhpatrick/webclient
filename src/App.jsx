import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Seller from './admin/Seller'
import './App.css'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Order from './pages/Order'
import ProductDetail from './pages/ProductDetail'
import Search from './pages/Search'
import { PrivateRouter, AdminRouter } from './components/PrivateRouter'
import './scss/style.scss'

function App() {
  const location = useLocation()
  const routes = [
    { path: '/', name: 'Home', exact: true, element: Home },
    { path: '/products/:productId', exact: true, element: ProductDetail },
    { path: '/aboutus', name: 'About', element: About },
    { path: '/contactus', name: 'Contact', element: Contact },
    { path: '/search', name: 'Search', element: Search },
    // { path: '/favorites', name: 'Favorites', element: Favorites },
    // { path: '/order', name: 'Order', element: Order },
    // { path: '/cart', name: 'Cart', element: Cart },
    // { path: '/seller/*', name: 'Seller', element: Seller },
  ]
  return (
    // <TransitionGroup>
    //   <CSSTransition key={location.key} classNames='page' timeout={300}>
    <Routes location={location}>
      {routes.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<route.element />}
            />
          )
        )
      })}
      <Route
        path='/favorites'
        name='Favorites'
        element={
          <PrivateRouter>
            <Favorites />
          </PrivateRouter>
        }
      />
      <Route
        path='/cart'
        name='Carts'
        element={
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        }
      />
      <Route
        path='/order'
        name='Order'
        element={
          <PrivateRouter>
            <Order />
          </PrivateRouter>
        }
      />
      <Route
        name='Seller'
        path='/seller/*'
        element={
          <AdminRouter>
            <Seller />
          </AdminRouter>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
    //   </CSSTransition>
    // </TransitionGroup>
  )
}

export default App
