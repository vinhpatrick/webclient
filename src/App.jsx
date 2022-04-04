import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Navigate to="/" replace />} />
          <Route path="/products/">
            <Route index element={<div>All products page</div>} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
