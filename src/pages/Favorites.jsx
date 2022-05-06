import React, { useEffect, useState } from 'react'
import { Media } from 'reactstrap'
import Layout from '../layout/Layout'
import FavoriteItem from '../components/FavoriteItem'
import { getWishlist } from '../api/userApi'
import { Spin, message as Message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { _showLogForm } from '../redux/action/changeFormAction'
import { Navigate } from 'react-router-dom'
import { deleteWishList } from '../api/userApi'

const Favorites = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [wishlist, setWishlist] = useState([])
  useEffect(() => {
    setLoading(true)
    getWishlist()
      .then((response) => {
        setLoading(false)
        const [products] = response.data
        const product = products.products
        if (product) setWishlist(product)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const handleDeleteWishList = (idsDelete) => {
    setLoading(true)
    deleteWishList(idsDelete)
      .then((response) => {
        Message.success('Bạn đã xóa thành công sản phẩm khỏi wishlist!')
        if (response.status > 200) {
          getWishlist()
            .then((response) => {
              setLoading(false)
              const [products] = response.data
              const product = products.products
              if (product) setWishlist(product)
            })
            .catch((error) => {
              console.log(error)
            })
        }
        setLoading(false)
      })
      .catch((error) => {
        Message.error('Lỗi hệ thống vui lòng thử lại sau!')
        setLoading(false)
      })
  }

  return (
    <Layout>
      <Spin spinning={loading}>
        <div className='container' style={{ minHeight: '600px' }}>
          <div className='row'>
            <div className='col-12'>
              <h3>Danh sách sản phẩm yêu thích của bạn!</h3>
              <hr />
            </div>
          </div>
          <div className='row'>
            <Media list>
              {wishlist.length > 0 ? (
                wishlist.map((item, index) => {
                  return <FavoriteItem key={index} {...item} delete={handleDeleteWishList} />
                })
              ) : (
                <div>
                  <h2>Bạn chưa có sản phẩm nào trong Wishlist!!!</h2>
                </div>
              )}
            </Media>
          </div>
        </div>
      </Spin>
    </Layout>
  )
}

export default Favorites
