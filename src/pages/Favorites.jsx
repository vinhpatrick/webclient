import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Media } from 'reactstrap'
import { deleteWishList, getWishlist } from '../api/userApi'
import FavoriteItem from '../components/FavoriteItem'
import Layout from '../layout/Layout'

const Favorites = () => {
  const auth = useSelector((state) => state.logForm.isAuthenticated)

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
        setLoading(false)
        console.log(error)
      })
  }, [auth])
  const handleDeleteWishList = (idsDelete) => {
    setLoading(true)
    deleteWishList(idsDelete)
      .then((response) => {
        toast.success('Bạn đã xóa thành công sản phẩm khỏi wishlist!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

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
        toast.error('Lỗi hệ thống vui lòng thử lại sau!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setLoading(false)
      })
  }

  return (
    <Layout>
      <Spin spinning={loading} style={{ paddingTop: '700px' }}>
        <div className='container page-wishlist' style={{ minHeight: '650px' }}>
          <div className='row'>
            <div className='col-12 page-title'>
              {wishlist.length > 0 ? (
                <h3>Danh sách sản phẩm yêu thích của bạn</h3>
              ) : (
                <h3>Bạn chưa có sản phẩm nào trong danh sách yêu thích</h3>
              )}
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
                <div></div>
              )}
            </Media>
          </div>
        </div>
      </Spin>
    </Layout>
  )
}

export default Favorites
