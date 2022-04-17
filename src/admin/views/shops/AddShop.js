import { useState } from 'react'
import { postShop } from '../../../../services/api/sellerApi'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CSpinner } from '@coreui/react'
import { useToast } from '../../../../contexts/toast'

const AddShop = () => {
  const style = { color: 'red' }
  const [data, setData] = useState({
    name: '',
    email: '',
    address: ''
  })
  const { error, warn, info, success } = useToast()
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    postShop(data)
      .then((respone) => {
        success(respone.data.message)
        window.location.reload(false)
      })
      .catch((err) => {
        error(err.response.data.message)
        setLoading(false)
      })
  }
  return (
    <CForm className="row g-3">
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlInput1">
          Tên cửa hàng <span style={style}>*</span>
        </CFormLabel>
        <CFormInput
          type="text"
          id="exampleFormControlInput1"
          name="name"
          placeholder="Nhập tên cửa hàng"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlTextarea1">
          Email cửa hàng <span style={style}>*</span>
        </CFormLabel>
        <CFormInput
          id="exampleFormControlTextarea1"
          placeholder="Nhập email của cửa hàng"
          name="email"
          onChange={(e) => handleChange(e)}
        ></CFormInput>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlInput1">
          Địa chỉ cửa hàng <span style={style}>*</span>
        </CFormLabel>
        <CFormInput
          type="text"
          placeholder="Nhập địa chỉ cửa hàng"
          id="exampleFormControlInput1"
          name="address"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <CCol xs={12}>
        <CButton disabled={loading} onClick={handleSubmit}>
          {!loading ? '' : <CSpinner component="span" size="sm" aria-hidden="true" />}
          Gửi
        </CButton>
      </CCol>
    </CForm>
  )
}

export default AddShop
