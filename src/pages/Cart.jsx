import { Table } from 'antd'
import Layout from '../layout/Layout'
import CartItemProduct from '../components/CartItemProduct'

const Cart = () => {
  return (
    <Layout>
      <div style={{ marginTop: '100px', minHeight: '620px' }}>
        <section className='section-content padding-y'>
          <div className='container'>
            <div className='row'>
              <main className='col-md-12'>
                <div className='card'>
                  <Table
                    // dataSource={tableData}
                    rowSelection={{
                      type: 'checkbox',
                      // onChange: (items) => {
                      //   selectedItems = items
                      // }
                    }}
                    // expandable={{
                    //   rowExpandable: (record) => !(record.shopDisabled || record.productDisabled),
                    //   expandedRowRender: (record) => <CartItemEditor {...record} />,
                    //   expandRowByClick: true
                    // }}
                    // loading={loading}
                    // pagination={{ position: ['bottomCenter'] }}
                    // footer={() => <CartFooter selectedItems={selectedItems} discount={discount} />}
                  >
                    <Table.Column title='SẢN PHẨM'>
                      <CartItemProduct />
                    </Table.Column>
                  </Table>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Cart
