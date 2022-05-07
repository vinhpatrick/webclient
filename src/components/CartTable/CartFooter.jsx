import styles from '../../css_modules/css/all.module.css'

import { Button, Form, Input, message as Message, Spin } from 'antd'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ORDER_STATUSES } from '../../helpers/order/index'
import numberSeparator from '../../helpers/validating/numberSeparator'
import { _deleteCartItems, _getMyCart } from '../../redux/action/cartAction'
import { order } from '../../api/userApi'

const CartFooter = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { selectedItems, discount } = props
  const addressUser = localStorage.getItem('address')
  const userId = localStorage.getItem('userId')
  const [address, setAddress] = useState('')
  //  const [shippingCost, setShippingCost] = useState(0)
  useEffect(() => {
    if (addressUser) {
      setAddress(addressUser)
    }
  }, [addressUser])

  const orderPrice = (items) => {
    let sum = 0
    items.forEach((item) => {
      sum += item.price * item.quantity
    })
    return sum
  }

  const orderItems = (items) => {
    let sum = 0
    items.forEach((item) => {
      sum += item.quantity
    })
    return sum
  }
  const shippingCost = orderItems(selectedItems) * 1000
  const handleOrder = (e) => {
    //  console.log('shippingCost', shippingCost)
    //  console.log('select order', selectedItems)
    if (selectedItems.length === 0) {
      Message.error('Chọn ít nhất một món hàng!')
    } else if (!address) {
      Message.error('Vui lòng nhập địa chỉ nhận hàng!')
    } else {
      const cartItems = selectedItems.map((item) => item.cartItemId)
      const orderItems = selectedItems.map((item) => ({ ...item }))
      order({ cartItems, orderItems, shippingCost, receiverAddress: address, user: userId })
        .then((res) => {
          Message.success('Đặt hàng thành công!')
          dispatch(_getMyCart())
          navigate('/order', { state: ORDER_STATUSES.WAITING_FOR_SELLER_CONFIRM })
        })
        .catch((e) => {
          const { status, data } = e.response
          if (status >= 500) {
            Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
          } else {
            const { message } = data
            Message.error(message)
          }

          dispatch(_getMyCart())
        })
    }
  }

  const handleDelete = (e) => {
    const cartItemIds = selectedItems.map((item) => item.cartItemId)
    dispatch(_deleteCartItems(cartItemIds))
  }

  return (
    <div className='row'>
      <div className='card-header'>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Mã giảm giá' />
          <span className='input-group-append'>
            <button className='btn btn-primary'>Kích hoạt</button>
          </span>
        </div>
      </div>

      <div className='card-body'>
        <dl className='dlist-align'>
          <dt>Số lượng</dt>
          <dd className='text-right'>
            {orderItems(selectedItems)} món hàng / {selectedItems.length} sản phẩm
          </dd>
        </dl>
        <dl className='dlist-align'>
          <dt>Tổng số tiền</dt>
          <dd className='text-right'>₫ {numberSeparator(orderPrice(selectedItems))}</dd>
        </dl>
        <dl className='dlist-align'>
          <dt>Phí vận chuyển</dt>
          <dd className='text-right'>₫ {numberSeparator(orderItems(selectedItems) * 1000)}</dd>
        </dl>
        <dl className='dlist-align'>
          <dt>Giảm</dt>
          <dd className='text-right'>₫ {numberSeparator(discount)}</dd>
        </dl>
        <dl className='dlist-align'>
          <dt>Thành tiền</dt>
          <dd className='text-right  h5'>
            <strong>
              ₫{' '}
              {numberSeparator(
                orderPrice(selectedItems) - discount + orderItems(selectedItems) * 1000
              )}
            </strong>
          </dd>
        </dl>
        <hr />
      </div>

      <Form
        name='register'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        autoComplete='off'
        style={{ textAlign: 'center' }}
      >
        <Form.Item
          label='Địa chỉ nhận hàng'
          hasFeedback
          required
          help={!address ? 'Cần nhập địa chỉ nhận hàng' : ''}
        >
          <Input
            allowClear={true}
            placeholder={address}
            className={`${styles['float-left']}`}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '85%' }}
          />
        </Form.Item>
      </Form>

      <div className='cart-footer row'>
        <div className='col-sm-4'>
          <p className='text-center mb-3'>
            <img src={`${process.env.PUBLIC_URL}/assets/misc/payments.png`} />
          </p>
        </div>

        <div className='col-sm-4' style={{ textAlign: 'center' }}>
          <Button
            size='large'
            className='btn btn-success'
            data-toggle='tooltip'
            title='Đặt hàng'
            onClick={handleOrder}
            icon={<i className='fa fa-shopping-cart' style={{ marginRight: '5px' }} />}
          >
            Đặt hàng ({selectedItems.length})
          </Button>
        </div>

        <div className='col-sm-4' style={{ textAlign: 'center' }}>
          <Button
            disabled={selectedItems.length === 0}
            size='large'
            className='btn btn-danger'
            data-toggle='tooltip'
            title='Xoá sản phẩm đã chọn'
            onClick={handleDelete}
            icon={<i className='fa fa-trash' style={{ marginRight: '5px' }} />}
          >
            Xoá các sản phẩm ({selectedItems.length})
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartFooter
