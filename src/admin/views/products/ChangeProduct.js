import React, { useState, useEffect, Suspense } from 'react'
import TableProduct from '../../components/TableProduct'
import axios from 'axios'
// import { getShops, getProducts } from '../../../../services/api/sellerApi'
import { CFormSelect, CSpinner } from '@coreui/react'
const ChangeProduct = () => {
  const [dataProducts, setDataProducts] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4000/products/')
      .then((response) => {
        console.log(response.data)
        setDataProducts(response.data)
      })
      .catch((error) => {
        return error
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
        {dataProducts.length != 0 ? (
          <TableProduct columns={columns} usersData={dataProducts} type='fix' />
        ) : (
          'Không có sản phẩm nào'
        )}
      </Suspense>
    </div>
  )
}
export default ChangeProduct
