import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../layout/Layout'
import CartItemProduct from '../components/CartTable/CartItemProduct'
import CartFooter from '../components/CartTable/CartFooter'
import CartItemEditor from '../components/CartTable/CartItemEditor'
import { _getMyCart } from '../redux/action/cartAction'

const Cart = () => {
  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
  // console.log('userId', userId)
  useEffect(() => {
    dispatch(_getMyCart(userId))
  }, [])
  let selectedItems = []
  const [discount, setDiscount] = useState(0)
  const { data, loading } = useSelector((state) => state.cart)
  const tableData = data.map((item) => {
    const { _id: cartItemId, quantity, size, product } = item
    const { _id: productId, name: productName, images: productImages, price, sizes } = product
    const thumbnail = productImages[0]
    return {
      key: { cartItemId, size, productId, quantity, price },
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
      {/* <Spin spinning={true}> */}
      <div>
        <section style={{ minHeight: '700px' }} className='section-contentpadding-y '>
          <div className='container '>
            <div className='row'>
              <main className='col-md-12'>
                {data.length > 0 ? (
                  <div className='card page-cart'>
                    <Table
                      dataSource={tableData}
                      key={2}
                      rowSelection={{
                        type: 'checkbox',
                        onChange: (items) => {
                          selectedItems = items
                        },
                      }}
                      expandable={{
                        rowExpandable: (record) => record.cartItemId,
                        expandedRowRender: (record) => <CartItemEditor {...record} />,
                        expandRowByClick: true,
                      }}
                      loading={loading}
                      pagination={{ position: ['bottomCenter'] }}
                      footer={() => (
                        <CartFooter selectedItems={selectedItems} discount={discount} />
                      )}
                    >
                      <Table.Column
                        title='SẢN PHẨM'
                        render={(record) => <CartItemProduct {...record} />}
                      />
                    </Table>
                  </div>
                ) : (
                  <div className='container page-wishlist'>
                    <div className='row'>
                      <div className='col-12 page-title'>
                        <h3>Bạn chưa có sản phẩm nào trong giỏ hàng</h3>
                        <hr />
                      </div>
                    </div>
                  </div>
                )}
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
