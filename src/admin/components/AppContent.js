import { CContainer, CSpinner } from '@coreui/react'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../../pages/NotFound'
import FeedBack from '../views/customer/FeedBack'
import TableUser from '../views/customer/TableUser'
import Dashboard from '../views/dashboard/Dashboard'
import TableOrder from '../views/orders/TableOrder'
import WaitingOrder from '../views/orders/WaitingOrder'
import AddProduct from '../views/products/AddProduct'
import ChangeProduct from '../views/products/ChangeProduct'
import DeleteProduct from '../views/products/DeleteProduct'
import Statistic from '../views/statistic/Statistic'
// routes config

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color='primary' />}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='change-product' element={<ChangeProduct />} />
          <Route path='delete-product' element={<DeleteProduct />} />
          <Route path='orders' element={<TableOrder />} />
          <Route path='waiting-orders' element={<WaitingOrder />} />
          <Route path='customer' element={<TableUser />} />
          <Route path='feedback' element={<FeedBack />} />
          <Route path='statistics' element={<Statistic />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
