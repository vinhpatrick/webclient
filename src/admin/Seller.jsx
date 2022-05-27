import React from 'react'
import '../scss/style.scss'
import { AppContent, AppFooter, AppHeader, AppSidebar } from './components/index'
const Seller = () => {
  return (
    <div>
      <AppSidebar />
      <div className='wrapper d-flex flex-column min-vh-100 bg-light'>
        <AppHeader />
        <div className='body flex-grow-1 px-3 '>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Seller
