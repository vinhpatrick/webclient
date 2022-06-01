import {
  CButton,
  CCol,
  CForm,
  CFormInput, CFormLabel,
  CFormTextarea, CImage, CInputGroup, CInputGroupText, CRow,
  CSpinner
} from '@coreui/react'
import axios from 'axios'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { updateProduct } from '../../api/adminApi'

const FormDetail = (recvData) => {
  const inputFile = useRef(null)
  const [data, setData] = useState({
    name: recvData.data.name,
    description: recvData.data.description,
    category: recvData.data.category,
    sizes: recvData.data.sizes,
    images: recvData.data.images,
    price: recvData.data.price,
    originalPrice: recvData.data.originalPrice,
  })
  // const [dataUpdate, setDataUpdate] = useState({})
  const [sizes, setSizes] = useState(data.sizes)
  const [imageUrls, setImageUrls] = useState(data.images)
  const [loading, setLoading] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (data.price == recvData.data.price) {
      delete data.price
    }
    if (data.price > data.originalPrice) {
      toast.warning('Giá sản phẩm không thể lớn hơn giá gốc', { autoClose: 2000 })
      setLoading(false)

    }
    data.images = imageUrls
    const productId = recvData.data.idProduct && recvData.data.idProduct
    setLoading(true)
    updateProduct(productId, data)
      .then((respone) => {
        toast.success('Update sản phẩm thành công !', { autoClose: 2000 })
        // window.location.reload(false)
      })
      .catch((err) => {
        toast.error('Update sản phẩm thất bại', { autoClose: 2000 })
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const uploadImage = (image) => {
    // Tạo một form data chứa dữ liệu gửi lên
    const formData = new FormData()
    // Hình ảnh cần upload
    formData.append('file', image)
    // Tên preset vừa tạo ở bước 1
    formData.append('upload_preset', 'vinh_tech')
    // Tải ảnh lên cloudinary
    // API: https://api.cloudinary.com/v1_1/{Cloudinary-Name}/image/upload
    axios
      .post('https://api.cloudinary.com/v1_1/gratiot/image/upload', formData)
      .then((response) => {
        setImageUrls([...imageUrls, response.data.secure_url])
      })
      .catch((err) => console.error(err))
  }
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...sizes]
    list[index][name] = value
    setSizes(list)
    data.sizes = sizes
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...sizes]
    list.splice(index, 1)
    setSizes(list)
    data.sizes.splice(index, 1)
  }

  //handle click event of the Add button
  const handleAddClick = () => {
    if (sizes[sizes.length - 1].name == '' || sizes[sizes.length - 1].name == '') {
      toast.warnimg('Vui lòng điền đủ thông tin về kích thước trước khi thêm mới', {
        autoClose: 2000,
      })
    } else {
      setSizes([...sizes, { name: '', numberInStock: '' }])
    }
  }
  const deleteFile = (e) => {
    const s = imageUrls.filter((image, index) => index !== e)
    setImageUrls(s)
  }
  const onButtonClick = () => {
    inputFile.current.click()
  }
  return (
    <div>
      <CForm className='row g-3'>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Tên sản phẩm</CFormLabel>
          <CFormInput
            type='text'
            id='exampleFormControlInput1'
            name='name'
            placeholder='Nhập tên sản phẩm'
            onChange={(e) => handleChange(e)}
            value={data.name}
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>Loại sản phẩm</CFormLabel>
          <CFormInput
            type='text'
            id='exampleFormControlInput1'
            name='category'
            placeholder='Nhập loại mặt hàng mà bạn muốn đề xuất'
            onChange={(e) => handleChange(e)}
            value={data.category}
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlTextarea1'>Mô tả sản phẩm</CFormLabel>
          <CFormTextarea
            rows='3'
            name='description'
            onChange={(e) => handleChange(e)}
            value={data.description}
          ></CFormTextarea>
        </div>
        <CCol xs={12}>
          <CFormLabel htmlFor='inputAddress'>Phân loại hàng</CFormLabel>
          {sizes.map((size, i) => {
            return (
              <div key={i} id='inputSize'>
                <CRow>
                  <CCol xs>
                    <CFormInput
                      name='name'
                      value={size.name}
                      placeholder='Nhập tên loại hàng'
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </CCol>
                  <CCol xs>
                    <CFormInput
                      name='numberInStock'
                      value={size.numberInStock}
                      placeholder='Nhập số lượng'
                      onChange={(e) => handleInputChange(e, i)}
                      type='number'
                    />
                  </CCol>
                </CRow>
                {sizes.length - 1 === i && (
                  <CButton color='dark' shape='rounded-pill' onClick={handleAddClick} size='sm'>
                    Thêm
                  </CButton>
                )}
                {sizes.length !== 1 && (
                  <CButton
                    color='dark'
                    shape='rounded-pill'
                    size='sm'
                    onClick={() => handleRemoveClick(i)}
                  >
                    Xóa
                  </CButton>
                )}
              </div>
            )
          })}
        </CCol>
        <CCol xs={12}>
          <CFormInput
            type='file'
            onChange={(e) => {
              uploadImage(e.target.files[0])
            }}
            ref={inputFile}
            style={{ display: 'none' }}
          />
          <CButton onClick={onButtonClick} color='secondary' shape='rounded-pill'>
            Thêm ảnh
          </CButton>
        </CCol>
        <CCol xs id='imageShow'>
          {imageUrls &&
            imageUrls.map((imageUrl, index) => {
              return (
                <CImage
                  fluid
                  src={imageUrl}
                  key={index}
                  width={150}
                  height={150}
                  onClick={() => deleteFile(index)}
                />
              )
            })}
        </CCol>
        <div className='mb-3'>
          <CRow>
            <CCol xs>
              <CFormLabel htmlFor='exampleFormControlInput1'>Giá bán</CFormLabel>
              <CInputGroup>
                <CFormInput
                  type='number'
                  name='price'
                  onChange={(e) => handleChange(e)}
                  value={data.price}
                />
                <CInputGroupText>VNĐ</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol xs>
              <CFormLabel htmlFor='exampleFormControlInput1'>Giá gốc</CFormLabel>
              <CInputGroup>
                <CFormInput
                  type='number'
                  id='exampleFormControlInput1'
                  name='originalPrice'
                  placeholder='Nhập giá gốc sản phẩm của bạn'
                  onChange={(e) => handleChange(e)}
                  value={data.originalPrice}
                />
                <CInputGroupText>VNĐ</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
        </div>
        <CCol xs={12}>
          <CButton disabled={loading} onClick={handleSubmit} type='submit'>
            {!loading ? '' : <CSpinner component='span' size='sm' aria-hidden='true' />}
            Lưu
          </CButton>
        </CCol>
      </CForm>
    </div>
  )
}
export default FormDetail
