import React from 'react'
import { Link } from 'react-router-dom'
import { CButton, CCol, CContainer, CRow } from '@coreui/react'

const NotFound = () => {
  return (
    <div className='bg-light min-vh-100 d-flex flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
          <CCol md={6}>
            <div className='clearfix'>
              <h1 className='float-start display-3 me-4'>404</h1>
              <h4 className='pt-3'>Xin lỗi!</h4>
              <p className='text-medium-emphasis float-start'>Không tìm thấy trang bạn đang tìm</p>
            </div>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <CButton color='info'>Quay về trang chủ</CButton>
            </Link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default NotFound
