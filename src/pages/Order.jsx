import { ExclamationCircleOutlined } from '@ant-design/icons'
import { CBadge, CButton, CCol, CRow } from '@coreui/react-pro'
import { Modal, Spin, Tabs, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { cancelOrder, confirmOrder, getOrder } from '../api/userApi'
import OrderItem from '../components/OrderItem'
import { ORDER_STATUSES_MAPPING } from '../helpers/order/index'
import numberSeparator from '../helpers/validating/numberSeparator'
// import OrderItem from './components/OrderItem'
import Layout from '../layout/Layout'

const { confirm } = Modal
const { TabPane } = Tabs
const { Title } = Typography

const Order = (props) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')
  useEffect(() => {
    getOrder({ status: status }).then((response) => {
      // console.log('status', status)
      const data = response.data
      setOrders(data)
      // console.log('order', response.data)
      setLoading(false)
    })
  }, [loading])
  const confirmOd = (orderId) => {
    confirmOrder(orderId)
      .then((response) => {
        toast.success('Bạn đã nhận hàng thành công!', { autoClose: 2000 })
        setLoading(false)
      })
      .catch((err) => {
        toast.error('Lỗi hệ thống vui lòng thử lại sau!', { autoClose: 2000 })
        setLoading(false)
      })
  }
  const getBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success'
      case 'Waiting for seller confirm':
        return 'warning'
      case 'In transit':
        return 'info'
      case 'Cancelled by customer':
        return 'danger'
      case 'Cancelled by seller':
        return 'danger'
      default:
        return 'primary'
    }
  }
  function callback(key) {
    setStatus(key)
    setLoading(true)
  }
  const delOrder = (orderId) => {
    cancelOrder(orderId)
      .then((response) => {
        toast.success('Bạn đã hủy đơn hàng thành công!', { autoClose: 2000 })
        setLoading(false)
      })
      .catch((err) => {
        toast.error('Lỗi hệ thống vui lòng thử lại sau!', { autoClose: 2000 })
        setLoading(false)
      })
  }
  const showDeleteConfirm = (orderId) => {
    confirm({
      title: 'Bạn chắc chắn muốn hủy đơn hàng này?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Đồng ý',
      okType: 'danger',
      cancelText: 'Quay lại',
      onOk() {
        setLoading(true)
        delOrder(orderId)
      },
      onCancel() {},
    })
  }
  return (
    <Layout>
      <div style={{ minHeight: '600px', marginTop: '120px' }}>
        <section className='section-pagetop bg'>
          <div className='container' style={{ marginTop: '45px', marginBottom: '45px' }}>
            <Title level={2}>Trạng thái đơn hàng</Title>
          </div>
        </section>
        <div className='container'>
          <Tabs defaultActiveKey={''} onChange={callback}>
            <TabPane tab='Tất cả' key=''></TabPane>
            <TabPane
              tab={ORDER_STATUSES_MAPPING['Waiting for seller confirm']}
              key='Waiting for seller confirm'
            ></TabPane>
            <TabPane tab={ORDER_STATUSES_MAPPING['In transit']} key='In transit'></TabPane>
            <TabPane tab={ORDER_STATUSES_MAPPING['Delivered']} key='Delivered'></TabPane>
            <TabPane
              tab={ORDER_STATUSES_MAPPING['Cancelled by customer']}
              key='Cancelled by customer'
            ></TabPane>
            <TabPane
              tab={ORDER_STATUSES_MAPPING['Cancelled by seller']}
              key='Cancelled by seller'
            ></TabPane>
          </Tabs>
        </div>
        <Spin spinning={loading} delay={500}>
          <section className='section-content padding-y'>
            <div className='container'>
              <div className='row'>
                <main className='col-md-12'>
                  {orders.map((order, i) => {
                    return (
                      <div key={i}>
                        <OrderItem itemData={order.items} />
                        <div className='mb-3'>
                          <CRow>
                            <CCol sm={6} className='oder-item1'>
                              <CBadge color={getBadge(order.status)}>
                                {ORDER_STATUSES_MAPPING[order.status]}
                              </CBadge>
                            </CCol>
                            <CCol sm={3} className='oder-item2'>
                              <p>
                                Tổng số tiền: ₫{' '}
                                {numberSeparator(order.totalPrice + order.shippingCost)}{' '}
                              </p>
                            </CCol>
                            {order.status == 'Waiting for seller confirm' ? (
                              <CCol sm={3} className='oder-item3'>
                                <CButton
                                  color='danger'
                                  shape='rounded-pill'
                                  onClick={() => {
                                    showDeleteConfirm(order._id)
                                  }}
                                >
                                  Hủy đơn hàng
                                </CButton>
                              </CCol>
                            ) : (
                              ''
                            )}
                            {order.status == 'In transit' ? (
                              <CCol sm={3} className='oder-item3'>
                                <CButton
                                  color='success'
                                  shape='rounded-pill'
                                  // loading={loading}
                                  onClick={() => {
                                    setLoading(true)
                                    confirmOd(order._id)
                                  }}
                                >
                                  Đã nhận hàng
                                </CButton>
                              </CCol>
                            ) : (
                              ''
                            )}
                          </CRow>
                        </div>
                      </div>
                    )
                  })}
                </main>
              </div>
            </div>
          </section>
          <section className='section-name bg padding-y'></section>
        </Spin>
      </div>
    </Layout>
  )
}
export default Order
