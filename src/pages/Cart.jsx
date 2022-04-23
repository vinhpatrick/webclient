import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import CartItemProduct from '../components/CartTable/CartItemProduct'
import styles from '../css_modules/css/all.module.css'
import { Spin } from 'antd'
import { _getMyCart } from '../redux/action/cartAction'

const Cart = () => {
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
  // console.log('userId', userId)
  useEffect(() => {
    dispatch(_getMyCart(userId))
  }, [])
  let selectedItems = []
  const [discount, setDiscount] = useState(0)
  const { items, loading } = useSelector((state) => state.cart)
  const tableData = items.map((item) => {
    const { productId, productName, thumbnail, sizes, price, size, quantity, cartItemId } = item
    return {
      key: { cartItemId, quantity, price },
      cartItemId,
      thumbnail,
      productId,
      productName,
      size,
      sizes,
      quantity,
      price,
    }
  })
  return (
    <Layout>
      {!auth && <Navigate to='/' />}
      {/* <Spin spinning={true}> */}
      <div>
        <section className={`${styles['section-content']} ${styles['padding-y']}`}>
          <div className='container'>
            <div className='row'>
              <main className='col-md-12'>
                <div className='card'>
                  {/* <Table
                    // dataSource={tableData}
                    rowSelection={{
                      type: 'checkbox',
                      // onChange: (items) => {
                      //   selectedItems = items
                      // }
                    }}
                    // expandable={{
                    //   rowExpandable: (record) => !(record.shopDisabled || record.productDisabled),
                    //   expandedRowRender: (record) => <CartItemEditor {...record} />
                    //   ,expandRowByClick: true
                    // }}
                    loading={loading}
                    pagination={{ position: ['bottomCenter'] }}

                    footer={() => <CartFooter selectedItems={selectedItems} discount={discount} 
                    />}
                  >
                    <Table.Column title="SẢN PHẨM" render={(record) => <CartItemProduct {...record} />} />
                  </Table> */}
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
      {/* </Spin> */}
    </Layout>
  )
}

export default Cart
