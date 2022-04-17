import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import AddProduct from '../views/products/AddProduct'
import ChangeProduct from '../views/products/ChangeProduct'
import Dashboard from '../views/dashboard/Dashboard'
import NotFound from '../../pages/NotFound'
// routes config
import routes from '../routes'

const AppContent = () => {
  console.log('routes', routes)
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color='primary' />}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='add-product' element={<AddProduct />} />
          {/* <Route path='change-product' element={<ChangeProduct />} /> */}
          <Route path='' element={<NotFound />} />

          {/* {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  // exact={route.exact}
                  // name={route.name}
                  element={<route.element />}
                />
              )
            )
          })} */}
          {/* <Route path='/seller' exact={true} element={<AddPro />} /> */}
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
