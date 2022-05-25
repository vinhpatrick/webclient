import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from '../css_modules/css/all.module.css'
import numberSeparator from '../helpers/validating/numberSeparator'

const ProductItem = (props) => {
  const { _id, name, images, price, originalPrice, sold, view } = props
  return (
    <>
      <div className={`${styles['col-md-6']} ${styles['col-lg-4']}  ${styles['col-xl-3']}`}>
        <Link className='product-info' to={`/products/${_id}`}>
          <div className={`${styles['card']} ${styles['card-product-grid']} cart-items`}>
            <div className={`${styles['img-wrap']}`}>{images && <img src={images[0]} />}</div>
            <figcaption className={`${styles['info-wrap']}`}>
              <div
                className={`${styles['title']}`}
                style={{
                  fontWeight: 'bold',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'black',
                  height: '60px',
                  lineHeight: '30px',
                }}
              >
                {name}
              </div>
              <div className={`${styles['row']} ${styles['col-sm-12']}`}>
                <div className={`${styles['price']} ${styles['mt-1']}`} style={{ color: 'red' }}>
                  ₫ {numberSeparator(price)}
                </div>
                {price !== originalPrice && (
                  <div className={`${styles['price-old']} ${styles['mt-2']}`}>
                    <del>₫ {numberSeparator(originalPrice)}</del>
                  </div>
                )}
              </div>
              <div className={`${styles['row']} ${styles['mt-1']} ${styles['text-dark']}`}>
                <div className='col-6 text-left'>
                  Đã bán <b>{sold}</b>
                </div>
                <div className='col-6 text-right'>
                  <b>{view}</b> lượt xem
                </div>
              </div>
            </figcaption>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductItem
