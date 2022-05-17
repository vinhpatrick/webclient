import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className='footer-admin'>
      <div>
        <a href='http://vvmobile.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
          Vmobile
        </a>
        <span className='ms-1'>&copy; 2022 </span>
      </div>
      <div className='ms-auto'>
        <span className='me-1'>Powered by</span>
        <a href='http://vvmobile.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
          Vmobile
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
