import { Link } from 'react-router-dom'

const CartItemProduct = () => {
  return (
    <figure className='itemside' style={{ width: '100%' }}>
      {/* Thumbnail */}
      <div className='aside'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/7.jpg`} className='img-sm' />
      </div>

      {/* Information */}
      <div style={{ marginLeft: '2em', width: '80%' }}>
        <div>
          <Link to='product' className='title text-dark ' style={{ pointerEvents: 'auto' }}>
            <b>Iphone 13 promax</b>
          </Link>

          <div className='row'>
            <div className='col row'>
              <div className='col-sm-3'>Đơn giá: </div>
              <div className='col text-right'>₫ 30000</div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>Loại hàng: Mặc định </div>
            <div className='col row'>
              <div className='col-sm-3'>Số lượng: </div>
              <div className='col text-right'>30</div>
            </div>
          </div>

          <div className='row'>
            {/* <div className={`${styles['col']}`}>
            {shopDisabled ? (
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
              )s
            )}
          </div> */}

            <div className='col row'>
              <div className='col-sm-3'>Thành tiền: </div>
              <div className='col text-right' style={{ color: 'red' }}>
                ₫ 2000000
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
export default CartItemProduct
