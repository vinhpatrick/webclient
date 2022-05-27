import { Spin } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Media } from 'reactstrap'

export default function FavoriteItem(props) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { _id: productId, name, description, images } = props
  const handleDeleteWishList = props.delete
  const deleted = () => {
    handleDeleteWishList(productId)
  }
  return (
    <Media tag='li'>
      <Media left middle>
        <Media
          // style={{
          //   maxWidth: '200px',
          //   maxHeight: '200px',
          //   with: '150px',
          //   height: '150px',
          // }}
          object
          src={images[0]}
          alt={description}
        />
      </Media>
      <Media body className='ml-5'>
        <Media heading>{name}</Media>
        <p>{description}</p>
        <Spin spinning={loading}>
          <Button onClick={deleted} outline color='danger'>
            <span className='fa fa-times'>Xóa</span>
          </Button>
        </Spin>
      </Media>
    </Media>
  )
}
