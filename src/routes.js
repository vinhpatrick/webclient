import Seller from './admin/Seller'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Order from './pages/Order'
import ProductDetail from './pages/ProductDetail'
import Search from './pages/Search'

import React from 'react'

const routes = (admin) => [
  { path: '/', name: 'Home', exact: true, element: Home },
  { path: '/products/:productId', exact: true, element: ProductDetail },
  { path: '/favorites', name: 'Favorites', element: Favorites },
  { path: '/aboutus', name: 'About', element: About },
  { path: '/contactus', name: 'Contact', element: Contact },
  { path: '/cart', name: 'Cart', element: Cart },
  { path: '/order', name: 'Order', element: Order },
  { path: '/search', name: 'Search', element: Search },
  // { path: '/seller/*', name: 'Seller', element: Seller },

]

export default routes;