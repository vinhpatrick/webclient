import styles from '../css_modules/css/all.module.css'

import { Link } from 'react-router-dom'
import numberSeparator from '../helpers/validating/numberSeparator'

const ListItem = (props) => {
  const {
    _id: productId,
    name,
    rating,
    description,
    images = [],
    price = 0,
    originalPrice = 0,
    createdAt,
  } = props
  const created = new Date(createdAt).getTime()
  const isNew = Date.now() - created <= 7 * 24 * 60 * 60 * 1000
  const sale = 100 - Math.floor((price / originalPrice) * 100)

  return (
    <>
      <article className={`${styles['card']} ${styles['card-product-list']}`}>
        <div className={`${styles['row']} ${styles['no-gutters']}`}>
          <aside className={`${styles['col-md-3']}`}>
            <div className={`${styles['img-wrap']}`}>
              {isNew ? (
                <span className='badge badge-danger'> NEW </span>
              ) : (
                sale > 10 && <span className='badge badge-danger'> SALE {sale}% </span>
              )}
              <img src={images[0]} />
            </div>
          </aside>

          <div className={`${styles['col-md-6']}`}>
            <div className={`${styles['info-main']}`}>
              <Link to={`/products/${productId}`} className={`${styles['h5']} ${styles['title']}`}>
                {name}
              </Link>
              <div className={`${styles['rating-wrap']} ${styles['mb-3']}`}>
                <ul className={`${styles['rating-stars']}`}>
                  <li className={`${styles['stars-active']} ${styles['w-80']}`}>
                    {rating >= 0.5 && <i className='fa fa-star' />}
                    {rating >= 1.5 && <i className='fa fa-star' />}
                    {rating >= 2.5 && <i className='fa fa-star' />}
                    {rating >= 3.5 && <i className='fa fa-star' />}
                    {rating >= 4.5 && <i className='fa fa-star' />}
                  </li>
                  <li>
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                  </li>
                </ul>
                <div className={`${styles['label-rating']}`}>{rating}/5</div>
              </div>
              <p
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'black',
                  height: '90px',
                  lineHeight: '30px',
                }}
              >
                {description}
              </p>
            </div>
          </div>
          <aside className={`${styles['col-sm-3']} list-view-fix`}>
            <div className={`${styles['info-aside']}`}>
              <div className={`${styles['price-wrap']}`}>
                <span className={`${styles['price']} ${styles['h5']}`}>
                  ₫ {numberSeparator(price)}{' '}
                </span>
                {originalPrice !== price && (
                  <del className={`${styles['price-old']}`}>₫ {numberSeparator(originalPrice)}</del>
                )}
              </div>
              <br />
              <p>
                <Link to={`/products/${productId}`}>
                  <button
                    className={`${styles['btn']} ${styles['btn-primary']} ${styles['btn-block']}`}
                  >
                    Xem sản phẩm
                  </button>
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}

export default ListItem
