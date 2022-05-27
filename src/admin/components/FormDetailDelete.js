import {
  CCol,
  CForm,
  CFormInput, CFormLabel,
  CFormTextarea, CImage, CInputGroup, CInputGroupText, CRow
} from '@coreui/react'
import React, { useState } from 'react'
import numberSeparator from '../../helpers/validating/numberSeparator'

const FormDetailDelete = (recvData) => {
  const [data, setData] = useState(recvData.data)
  const [imageUrls, setImageUrls] = useState(data.images)
  const [sizes, setSizes] = useState(data.sizes)

  return (
    <div>
      <CForm className='row g-3'>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Tên sản phẩm</CFormLabel>
          <CFormInput
            disabled
            type='text'
            id='exampleFormControlInput1'
            name='name'
            placeholder='Nhập tên sản phẩm'
            value={data.name}
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Loại sản phẩm</CFormLabel>
          <CFormInput
            disabled
            type='text'
            id='exampleFormControlInput1'
            name='category'
            value={data.category}
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlTextarea1'>Mô tả sản phẩm</CFormLabel>
          <CFormTextarea
            disabled
            id='exampleFormControlTextarea1'
            rows='3'
            name='description'
            value={data.description}
          ></CFormTextarea>
        </div>

        <CCol xs={12}>
          <CFormLabel htmlFor='inputAddress'>Phân loại hàng</CFormLabel>
          {sizes.map((size, index) => {
            return (
              <div key={index}>
                <CRow>
                  <CCol xs>
                    <CFormInput name='name' value={size.name} disabled />
                  </CCol>
                  <CCol xs>
                    <CFormInput name='numberInStock' value={size.numberInStock} disabled />
                  </CCol>
                </CRow>
              </div>
            )
          })}
        </CCol>
        <CCol xs={12} id='imageShow'>
          {imageUrls &&
            imageUrls.map((imageUrl, idx) => {
              return <CImage fluid src={imageUrl} width={150} height={150} key={idx} />
            })}
        </CCol>
        <div className='mb-3'>
          <CRow>
            <CCol xs>
              <CFormLabel htmlFor='exampleFormControlInput1'>Giá bán</CFormLabel>
              <CInputGroup className='mb-3'>
                <CFormInput
                  aria-label='Amount (to the nearest dollar)'
                  name='price'
                  disabled
                  value={numberSeparator(data.price)}
                />
                <CInputGroupText>VNĐ</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol xs>
              <CFormLabel htmlFor='exampleFormControlInput1'>Giá gốc</CFormLabel>
              <CInputGroup className='mb-3'>
                <CFormInput
                  aria-label='Amount (to the nearest dollar)'
                  name='originalPrice'
                  disabled
                  value={numberSeparator(data.originalPrice)}
                />
                <CInputGroupText>VNĐ</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
        </div>
      </CForm>
    </div>
  )
}
export default FormDetailDelete
