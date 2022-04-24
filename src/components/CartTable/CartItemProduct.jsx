import styles from '../../css_modules/css/all.module.css'

import { Link } from 'react-router-dom'

import numberSeparator from '../../helpers/validating/numberSeparator'

const CartItemProduct = (props) => {
  const { thumbnail, productId, productName, productDisabled, quantity, size, sizes, price } = props

  const filter = sizes.filter((i) => i.name === size)
  const sizeDisabled = filter.length === 0
  const { numberInStock } = sizeDisabled ? {} : filter[0]

  return (
    <figure className={`${styles['itemside']}`} style={{ width: '100%' }}>
      {/* Thumbnail */}
      <div className={`${styles['aside']}`}>
        <img src={thumbnail} className={`${styles['img-sm']}`} />
      </div>

      {/* Information */}
      <div style={{ marginLeft: '2em', width: '80%' }}>
        <div>
          <Link
            to={`/products/${productId}`}
            className={`${styles['title']} ${styles['text-dark']}`}
            style={{ pointerEvents: productDisabled ? 'none' : 'auto' }}
          >
            <b>{productName}</b>
          </Link>

          <div className='row'>
            <Link
              to='/'
              className={`${styles['col']}`}
              // style={{ pointerEvents: shopDisabled ? 'none' : 'auto' }}
            >
              Shop: Vinhok
            </Link>
            <div className='col row'>
              <div className='col-sm-3'>Đơn giá: </div>
              <div className='col text-right'>₫ {numberSeparator(price)}</div>
            </div>
          </div>

          <div className='row'>
            <div className={`${styles['col']}`}>Loại hàng: {size} </div>
            <div className='col row'>
              <div className='col-sm-3'>Số lượng: </div>
              <div className='col text-right'>{quantity}</div>
            </div>
          </div>

          <div className='row'>
            <div className={`${styles['col']}`}>
              {/* {shopDisabled ? (
                <span className={`${styles['text-danger']}`}>Gian hàng hiện không hoạt động</span>
              ) : sizeDisabled ? (
                <span className={`${styles['text-danger']}`}>Loại hàng này không còn được bày bán</span>
              ) : productDisabled ? (
                <span className={`${styles['text-danger']}`}>Sản phẩm không còn được bày bán</span>
              ) : !numberInStock ? (
                <span className={`${styles['text-warning']}`}>Sản phẩm hiện đang hết hàng</span>
              ) : (
                numberInStock < quantity && (
                  <span className={`${styles['text-warning']}`}>Trong kho chỉ còn {numberInStock} sản phẩm</span>
                )
              )} */}
            </div>

            <div className='col row'>
              <div className='col-sm-3'>Thành tiền: </div>
              <div className='col text-right' style={{ color: 'red' }}>
                ₫ {numberSeparator(price * quantity)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default CartItemProduct
