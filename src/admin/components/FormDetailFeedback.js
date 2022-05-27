import {
  CForm,
  CFormInput, CFormLabel,
  CFormTextarea
} from '@coreui/react'
import React from 'react'

const FormDetailFeedback = (props) => {
  const { data } = props
  return (
    <div>
      <CForm className='row g-3'>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Họ</CFormLabel>
          <CFormInput
            type='text'
            id='exampleFormControlInput1'
            name='firstname'
            value={data.firstname}
            disabled
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Tên</CFormLabel>
          <CFormInput
            type='text'
            id='exampleFormControlInput1'
            name='lastname'
            value={data.lastname}
            disabled
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Số điện thoại</CFormLabel>
          <CFormInput
            type='text'
            id='exampleFormControlInput1'
            name='telnum'
            value={data.telnum}
            disabled
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Email</CFormLabel>
          <CFormInput
            type='text'
            id='exampleFormControlInput1'
            name='email'
            value={data.email}
            disabled
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Liên hệ với khách hàng qua </CFormLabel>
          <CFormInput
            type='text'
            id='exampleFormControlInput1'
            name='contactType'
            value={data.contactType}
            disabled
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlTextarea1'>Phản hồi</CFormLabel>
          <CFormTextarea disabled rows='3' name='message' value={data.message}></CFormTextarea>
        </div>
      </CForm>
    </div>
  )
}

export default FormDetailFeedback
