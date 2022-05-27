import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import './scss/style.scss'

function App() {
  const location = useLocation()
  const routes = [
    { path: '/', name: 'Home', exact: true, element: Home },
    { path: '/products/:productId', exact: true, element: ProductDetail },
    { path: '/favorites', name: 'Favorites', element: Favorites },
    { path: '/aboutus', name: 'About', element: About },
    { path: '/contactus', name: 'Contact', element: Contact },
    { path: '/cart', name: 'Cart', element: Cart },
    { path: '/order', name: 'Order', element: Order },
    { path: '/search', name: 'Search', element: Search },
    { path: '/seller/*', name: 'Seller', element: Seller },
  ]
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='page' timeout={300}>
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>

    // <TransitionGroup>
    //   <CSSTransition key={location.key} classNames='page' timeout={300}>
    //     <Routes>
    //       <Route exact path='/' element={<Home />} />
    //       <Route path='/products/:productId' element={<ProductDetail />} />
    //       <Route path='/favorites' element={<Favorites />} />
    //       <Route path='/aboutus' element={<About />} />
    //       <Route path='/contactus' element={<Contact />} />
    //       <Route path='/cart' element={<Cart />} />
    //       <Route path='/order' element={<Order />} />
    //       <Route path='/search' element={<Search />} />
    //       <Route path='/seller/*' element={<Seller />} />
    //       <Route path='*' element={<NotFound />} />
    //     </Routes>
    //   </CSSTransition>
    // </TransitionGroup>

    //   ,
    // "engines": {
    //   "node": "14.2.0",
    //   "npm": "6.14.5"
    // }
  )
}

export default App
