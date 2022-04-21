import { Link, useParams, useHistory } from 'react-router-dom'
import { Spin, Radio, InputNumber, message as Message } from 'antd'
import Layout from '../layout/Layout'
import CommentProduct from '../components/CommentProduct'

// import PriceChart from './components/PriceChart'
import { ToastProvider } from '../contexts/ToastProvider'

const ProductDetail = () => {
  return (
    <Layout>
      <section style={{ marginTop: '100px' }} className='section-content padding-y bg'>
        <div className='container'>
          <article className='card'>
            <div className='card-body'>
              <div className='row'>
                {/* Images */}
                <aside className='col-md-6'>
                  <article className='gallery-wrap' style={{ textAlign: 'center' }}>
                    <div className='img-big-wrap'>
                      <img
                        className='card img-wrap'
                        src={`${process.env.PUBLIC_URL}/assets/images/xiaomi-civi.jpg`}
                      />
                    </div>

                    <div className='thumbs-wrap'>
                      {/* {product.images.map((image, index) => {
                    return ( */}
                      <>
                        <img
                          // key={index}
                          className='item-thumb'
                          src={`${process.env.PUBLIC_URL}/assets/images/xiaomi-civi-3.jpg`}
                          // onClick={(e) => setTargetImage(e.target.src)}
                        />
                      </>
                      {/* )
                  })} */}
                    </div>
                  </article>
                </aside>

                <main className='col-md-6'>
                  <article>
                    {/* Category */}

                    {/* Name */}
                    <h3 className='title'>Iphone 13 promax</h3>
                    {/* Rating */}
                    <div>
                      <ul className='rating-stars'>
                        <li className='stars-active'>
                          {<i className='fa fa-star' />}
                          {<i className='fa fa-star' />}
                          {<i className='fa fa-star' />}
                          {<i className='fa fa-star' />}
                          {<i className='fa fa-star' />}
                        </li>
                        <li>
                          <i className='fa fa-star' />
                          <i className='fa fa-star' />
                          <i className='fa fa-star' />
                          <i className='fa fa-star' />
                          <i className='fa fa-star' />
                        </li>
                      </ul>
                      <span className='label-rating mr-3 text-muted'>5/5</span>
                      <a className='btn-link  mr-3 text-muted'>
                        {' '}
                        <i className='fa fa-heart' /> Thích{' '}
                      </a>
                      <a className='btn-link text-muted mr-3'>
                        {' '}
                        <i className='fa fa-book' /> So sánh{' '}
                      </a>
                      <Link to='/' className='text-primary btn-link'>
                        #Điện thoại
                      </Link>
                    </div>
                    <hr />

                    {/* Descroption */}
                    <div className='mb-3'>
                      <h6 style={{ fontWeight: 'bold' }}>Mô tả</h6>
                      <>
                        iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021
                        đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm,
                        bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được
                        nâng cấp lên 120 Hz mượt mà
                      </>
                    </div>

                    {/* Sizes */}
                    <div className='form-group'>
                      <label className='text-dark' style={{ fontWeight: 'bold' }}>
                        Loại hàng
                      </label>
                      <div>
                        <Radio.Group
                          onChange={(e) => {
                            const { value: sizeName, stock } = e.target
                            // setTargetSize(sizeName)
                            // setTargetStock(stock)
                          }}
                        >
                          {/* {product.sizes
                        .sort((a, b) => a.name - b.name)
                        .map((size, index) => {
                          const { name, numberInStock } = size
                          return (
                            <Radio.Button
                              key={index}
                              value={name}
                              disabled={numberInStock === 0}
                              style={{ margin: '3px' }}
                              stock={numberInStock}
                            >
                              {name}
                            </Radio.Button>
                          )
                        })} */}
                        </Radio.Group>
                        <br />
                        {/* <span>{targetSize && `${targetStock} sản phẩm có sẵn`}</span> */}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className='form-group'>
                      <label className='text-dark' style={{ fontWeight: 'bold' }}>
                        Số lượng
                      </label>
                      <div>
                        <InputNumber
                          value={1}
                          min={1}
                          // max={targetStock || 1}
                          // onChange={(value) => setQuantity(value)}
                        />
                      </div>
                    </div>

                    {/* Price */}
                    <div className='mb-3'>
                      <var className='price h4' style={{ color: 'red' }}>
                        đ 20000
                        {/* ₫ {numberSeparator(product.price)} */}
                      </var>{' '}
                      <br />
                      {/* {product.originalPrice !== product.price && (
                    <del className="price-old h5">₫ {numberSeparator(product.originalPrice)}</del>
                  )} */}
                      <del className='price-oldl h5'>₫ 300000</del>
                    </div>
                    <div className='mb-4'>
                      <button
                        className='btn btn-primary mr-1'
                        //  onClick={handleBuy}
                      >
                        Mua ngay
                      </button>
                      <button
                        className='btn btn-light'
                        //  onClick={handleAddToCart}
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </article>

          <article className='card mt-5'></article>

          <div className='card-body'>
            <ToastProvider>
              {/* <PriceChart
              productId={productId}
              /> */}
            </ToastProvider>
          </div>
          <article style={{ marginBottom: '50px' }} className='card mt-5'>
            <div className='card-body'>
              <h5>Bình luận</h5>
              <ToastProvider>
                <CommentProduct
                //  productId={productId}
                />
              </ToastProvider>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
export default ProductDetail
