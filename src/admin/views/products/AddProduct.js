import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import axiosClient from '../../../api/axiosClient'
import { addProduct } from '../../../api/adminApi'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CFormTextarea,
  CInputGroupText,
  CImage,
  CRow,
  CSpinner,
} from '@coreui/react'
import { useToast } from '../../../contexts/toast'
import { toast } from 'react-toastify'

const AddProduct = () => {
  const style = { color: 'red' }
  const initData = {
    name: '',
    description: '',
    category: '',
    sizes: [],
    images: [],
    price: '',
    originalPrice: '',
  }
  const { error, warn, info, success } = useToast()
  const inputFile = useRef(null)
  const [data, setData] = useState(initData)

  const [sizes, setSizes] = useState([{ name: '', numberInStock: '' }])
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
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
        //data.images.push(response.data.secure_url);
        setImages([...images, response.data.secure_url])
      })
      .catch((err) => console.error(err))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    data.images = images
    if (data.sizes.length == 0) {
      warn('Sản phẩm cần tối thiểu một loại hàng')
      setLoading(false)
    } else {
      // console.log('data', data)
      // const token = localStorage.getItem('token')
      // axiosClient
      //   .post('http://localhost:4000/products', data)
      addProduct(data)
        .then((response) => {
          if (response.data.success === true) {
            // console.log('them sp thanh cong')
            success(response.data.status)
            setData(initData)
            setImages([])
            setSizes([{ name: '', numberInStock: '' }])
            // console.log('data', response.data)
          } else {
            error(response.data.error)
          }
        })
        .catch((err) => {
          // console.log('them sp that bai')
          error('Thêm sản phẩm thất bại')
          // error(err.response.data.message)
        })
        .finally(() => {
          setLoading(false)
          // setData(initData)
        })
    }
  }

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...sizes]
    list[index][name] = value
    setSizes(list)
    data.sizes = sizes
  }

  // // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...sizes]
    list.splice(index, 1)
    setSizes(list)
    data.sizes.splice(index, 1)
  }

  // // handle click event of the Add button
  const handleAddClick = () => {
    if (sizes[sizes.length - 1].name == '' || sizes[sizes.length - 1].name == '') {
      warn('Vui lòng điền đủ thông tin về kích thước trước khi thêm mới')
    } else {
      setSizes([...sizes, { name: '', numberInStock: '' }])
    }
  }

  const onButtonClick = () => {
    inputFile.current.click()
  }

  const deleteFile = (e) => {
    const s = images.filter((image, index) => index !== e)
    setImages(s)
  }
  return (
    <div>
      <CForm className='row g-3'>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1'>
            Tên sản phẩm <span style={style}>*</span>
          </CFormLabel>
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
          <CFormLabel htmlFor='exampleFormControlInput1'>
            Loại sản phẩm <span style={style}>*</span>
          </CFormLabel>
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
          <CFormLabel htmlFor='exampleFormControlTextarea1'>
            Mô tả sản phẩm <span style={style}>*</span>
          </CFormLabel>
          <CFormTextarea
            id='exampleFormControlTextarea1'
            rows='3'
            name='description'
            onChange={(e) => handleChange(e)}
            placeholder='Mô tả chi tiết về sản phẩm của bạn'
            value={data.description}
          ></CFormTextarea>
        </div>
        <CCol xs={12}>
          <CFormLabel htmlFor='inputAddress'>
            Phân loại hàng <span style={style}>*</span>
          </CFormLabel>
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
                      placeholder='Nhập số lượng hàng'
                      onChange={(e) => handleInputChange(e, i)}
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
            Thêm ảnh <span style={style}>*</span>
          </CButton>
        </CCol>
        <CCol xs={12} id='imageShow'>
          {images &&
            images.map((image, index) => {
              return (
                <CImage
                  fluid
                  src={image}
                  width={150}
                  onClick={() => deleteFile(index)}
                  key={index}
                />
              )
            })}
        </CCol>
        <div className='mb-3'>
          <CRow>
            <CCol xs>
              <CFormLabel htmlFor='exampleFormControlInput1'>
                Giá bán <span style={style}>*</span>
              </CFormLabel>
              <CInputGroup>
                <CFormInput
                  aria-label='Amount (to the nearest dollar)'
                  name='price'
                  onChange={(e) => handleChange(e)}
                  placeholder='Nhập giá bán sản phẩm của bạn'
                  value={data.price}
                />
                <CInputGroupText>VNĐ</CInputGroupText>
              </CInputGroup>
            </CCol>
            <CCol xs>
              <CFormLabel htmlFor='exampleFormControlInput1'>
                Giá gốc <span style={style}>*</span>
              </CFormLabel>
              <CInputGroup>
                <CFormInput
                  type='text'
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
          <CButton disabled={loading} onClick={handleSubmit} type='submit' color='primary'>
            {!loading ? '' : <CSpinner component='span' size='sm' aria-hidden='true' />}
            Đăng sản phẩm
          </CButton>
        </CCol>
      </CForm>
    </div>
  )
}

export default AddProduct
