import { CCol, CImage, CRow, CSmartTable } from '@coreui/react-pro'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import numberSeparator from '../helpers/validating/numberSeparator'
const { Title } = Typography
const OrderItem = (props) => {
  const { itemData } = props
  const columns = [
    {
      label: 'Cửa hàng: VinhOK',
      key: 'image',
      _style: { width: '60%' },
      _props: { className: 'NameShopInOrder' },
    },
    {
      key: 'price',
      label: '',
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
  ]
  return (
    <>
      <CSmartTable
        activePage={3}
        columns={columns}
        items={itemData}
        scopedColumns={{
          price: (item) => <td>₫ {numberSeparator(item.price)}</td>,
          image: (item) => (
            <td>
              <CRow>
                <CCol sm={2}>
                  <CImage rounded thumbnail src={item.product.images[0]} width={100} height={100} />
                </CCol>
                <CCol sm={10}>
                  <Title id='traffic' className='card-title mb-0' level={4}>
                    <Link to={`/product/${item.product._id}`}>{item.product.name}</Link>
                  </Title>
                  <div className='small text-medium-emphasis'>Phân loại hàng: {item.size}</div>
                  <div className=' text-medium'>x{item.quantity}</div>
                </CCol>
              </CRow>
            </td>
          ),
        }}
        tableFilter
        tableProps={{
          striped: true,
          hover: true,
        }}
      />
    </>
  )
}

export default OrderItem
