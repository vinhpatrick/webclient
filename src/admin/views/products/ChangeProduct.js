import React, { useState, useEffect, Suspense } from 'react'
import TableProduct from '../../components/TableProduct'
import { getProduct } from '../../../api/adminApi'
import { CSpinner } from '@coreui/react'
const ChangeProduct = () => {
  const [dataProducts, setDataProducts] = useState([])
  useEffect(() => {
    getProduct({ sort: '-createdAt' })
      .then((response) => {
        const { products } = response.data
        setDataProducts(products)
        console.log('lay sp thanh cong')
      })
      .catch((error) => {
        console.log('err', error)
      })
  }, [])

  const columns = [
    {
      label: 'Tên sản Phẩm',
      key: 'name',
      _style: { width: '40%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Loại sản phẩm',
      key: 'category',
    },
    {
      label: 'Giá sản phẩm',
      key: 'price',
      filter: true,
      sorter: false,
      _style: { width: '20%' },
    },
    { label: 'Đánh giá', key: 'rating', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { color: 'primary', className: 'fw-semibold' },
    },
  ]
  return (
    <div>
      <Suspense fallback={<CSpinner color='primary' />}>
        {dataProducts.length > 0 ? (
          <TableProduct columns={columns} usersData={dataProducts && dataProducts} type='fix' />
        ) : (
          'Không có sản phẩm nào'
        )}
      </Suspense>
    </div>
  )
}
export default ChangeProduct
