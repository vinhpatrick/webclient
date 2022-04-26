import React, { useEffect, useState } from 'react'
import { Media } from 'reactstrap'
import Layout from '../layout/Layout'
import FavoriteItem from '../components/FavoriteItem'
import { getWishlist } from '../api/userApi'
import { Spin } from 'antd'

const Favorites = () => {
  const [loading, setLoading] = useState(false)
  const [wishlist, setWishlist] = useState([])
  // const user = localStorage.getItem('userId')
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
  // console.log('wishlist', wishlist)
  return (
    <Layout>
      <Spin spinning={loading}>
        <div className='container' style={{ minHeight: '600px' }}>
          <div className='row'>
            <div className='col-12'>
              <h3>My Favorites</h3>
              <hr />
            </div>
          </div>
          <div className='row'>
            <Media list>
              {wishlist.length > 0 ? (
                wishlist.map((item, index) => {
                  return <FavoriteItem key={Math.random()} {...item} />
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
