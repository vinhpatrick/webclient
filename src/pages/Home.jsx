import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Spin, message as Message } from 'antd'

import Layout from '../layout/Layout'
import ProductItem from '../components/ProductItem'
import BannerTop from '../components/BannerTop'
import { searchProducts } from '../api/productApi'


const Home = (props) => {
  useEffect(() => {
    // console.log('goi api home')
  }, [])
  const [loadingNews, setLoadingNews] = useState(false)
  const [news, setNews] = useState([])

  const [loadingPopulars, setLoadingPopulars] = useState(false)
  const [populars, setPopulars] = useState([])

  const [loadingSells, setLoadingSells] = useState(false)
  const [sells, setSells] = useState([])
  useEffect(() => {
    setLoadingNews(true)
    setLoadingPopulars(true)
    setLoadingSells(true)
    //sort date
    searchProducts({ search: '', page: 1, limit: 12, sort: '-createdAt' })
      .then((response) => {
        const { products: news } = response.data
        setNews(news)
        setLoadingNews(false)
      })
      .catch((error) => {
        const { status, data } = error.response
        if (status >= 500) {
          // const error = new Error('Lỗi hệ thống, vui lòng thử lại sau')
          // console.log(error)
          Message.error('Lỗi hệ thống vui lòng thử lại sau')
        } else {
          const { message } = data
          Message.error(message)
        }
        setLoadingNews(false)
      })
    //sort views
    searchProducts({ search: '', page: 1, limit: 12, sort: '-view' })
      .then((response) => {
        const { products: populars } = response.data
        setPopulars(populars)
        setLoadingPopulars(false)
      })
      .catch((error) => {
        const { status, data } = error.response
        if (status >= 500) {
          // const error = new Error('Lỗi hệ thống, vui lòng thử lại sau')
          // console.log(error)
          Message.error('Lỗi hệ thống vui lòng thử lại sau')
        } else {
          const { message } = data
          Message.error(message)
        }
        setLoadingPopulars(false)
      })
    //sort sold
    searchProducts({ search: '', page: 1, limit: 12, sort: '-sold' })
      .then((response) => {
        const { products: sells } = response.data
        setSells(sells)
        setLoadingSells(false)
      })
      .catch((error) => {
        const { status, data } = error.response
        if (status >= 500) {
          // const error = new Error('Lỗi hệ thống, vui lòng thử lại sau')
          // console.log(error)
          Message.error('Lỗi hệ thống vui lòng thử lại sau')
        } else {
          const { message } = data
          Message.error(message)
        }
        setLoadingSells(false)
      })
  }, [])
  return (
    <Layout>
      <BannerTop />
      <div className=''>
        <section className='section-name padding-y-sm'>
          <div className='container'>
            <header className='section-heading'>
              <h3 className='section-title'>Sản phẩm mới</h3>
            </header>
            <Spin spinning={loadingNews}>
              <div className='row'>
                {news.length &&
                  news.map((item, index) => {
                    return <ProductItem key={Math.random()} {...item} />
                  })}
              </div>
            </Spin>
          </div>
        </section>
        <section className='section-name padding-y-sm'>
          <div className='container'>
            <header className='section-heading'>
              <h3 className='section-title'>Tìm kiếm nhiều nhất</h3>
            </header>
            <Spin spinning={loadingPopulars}>
              <div className='row'>
                {populars.length &&
                  populars.map((item, index) => {
                    return <ProductItem key={Math.random()} {...item} />
                  })}
              </div>
            </Spin>
          </div>
        </section>
        <section className='section-name padding-y-sm'>
          <div className='container'>
            <header className='section-heading'>
              <h3 className='section-title'>Bán chạy</h3>
            </header>
            <Spin spinning={loadingSells}>
              <div className='row'>
                {sells.length &&
                  sells.map((item, index) => {
                    return <ProductItem key={index} {...item} />
                  })}
              </div>
            </Spin>
          </div>
        </section>
        <div style={{ textDecoration: 'none' }} className='view-all-product'>
          {/* <Link to='/'>Xem tất cả sản phẩm</Link> */}
        </div>
      </div>
    </Layout>
  )
}

export default Home
