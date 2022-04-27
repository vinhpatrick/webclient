import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Media, Button } from 'reactstrap'
import { deleteWishList, getWishlist } from '../api/userApi'
import { Spin, message as Message } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function FavoriteItem(props) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { _id: productId, name, description, images } = props
  const handleDeleteWishList = (e) => {
    // e.preventDefault()
    setLoading(true)
    deleteWishList(productId)
      .then((response) => {
        Message.success('Bạn đã xóa thành công sản phẩm khỏi wishlist!')
        setLoading(false)
        // navigate('/favorites')
      })
      .catch((error) => {
        Message.error('Lỗi hệ thống vui lòng thử lại sau!')
        setLoading(false)
      })
  }
  return (
    <Media tag='li'>
      <Media left middle>
        <Media
          style={{
            maxWidth: '200px',
            maxHeight: '200px',
            with: '150px',
            height: '150px',
          }}
          object
          src={images[0]}
          alt='hihi'
        />
      </Media>
      <Media body className='ml-5'>
        <Media heading>{name}</Media>
        <p>{description}</p>
        <Spin spinning={loading}>
          <a href='/favorites' onClick={handleDeleteWishList}>
            <Button type='submit' value='submit' outline color='danger'>
              <span className='fa fa-times'>Xóa</span>
            </Button>
          </a>
        </Spin>
      </Media>
    </Media>
  )
}
