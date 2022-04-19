import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import ProductItem from '../components/ProductItem'
import { getRandomProduct } from '../utils/getMockData'
import BannerTop from '../components/BannerTop'
const Home = () => {
  return (
    <Layout>
      <BannerTop />
      <div className='container'>
        <div className='row align-items-start'>
          <header className='section-heading'>
            <h3 className='section-title'>Sản phẩm mới</h3>
          </header>

          {[...new Array(4)].map((e, index) => (
            <div key={index} className='col-12 col-md m-1'>
              <ProductItem {...getRandomProduct()} />
            </div>
          ))}
          <div className='view-all-product'>
            <Link to='/'>Xem tất cả sản phẩm</Link>
          </div>
        </div>
        <div className='row align-items-start'>
          <header className='section-heading'>
            <h3 className='section-title'>Sản Phẩm Bán Chạy</h3>
          </header>

          {[...new Array(4)].map((e, index) => (
            <div key={index} className='col-12 col-md m-1'>
              <ProductItem {...getRandomProduct()} />
            </div>
          ))}

          <div className='view-all-product'>
            <Link to='/'>Xem tất cả sản phẩm</Link>
          </div>
        </div>

        <div className='row align-items-start last-item'>
          <header className='section-heading'>
            <h3 className='section-title'>Tìm Kiếm Nhiều Nhất</h3>
          </header>

          {[...new Array(4)].map((e, index) => (
            <div key={index} className='col-12 col-md m-1'>
              <ProductItem {...getRandomProduct()} />
            </div>
          ))}

          <div className='view-all-product'>
            <Link to='/'>Xem tất cả sản phẩm</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
