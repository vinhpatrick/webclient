import React, { useState, useEffect, Suspense } from 'react'
import TableProduct from '../../components/TableProduct'
import { getShops, getProducts } from '../../../../services/api/sellerApi'
import { CFormSelect, CSpinner } from '@coreui/react'
const DeleteProduct = () => {
  const [shopId, setShopId] = useState('')
  const [listShop, setListShop] = useState([])
  const [dataProducts, setDataProducts] = useState([])
  useEffect(() => {
    getShops({}).then((response) => {
      setListShop(response.data.data)
    })
  }, [])

  useEffect(() => {
    if (shopId != '' && shopId != 1) {
      getProducts(shopId).then((response) => {
        setDataProducts(response.data.data.products)
      })
    }
  }, [shopId])

  const columns = [
    {
      label: 'Tên sản Phẩm',
      key: 'name',
      _style: { width: '40%' },
      _props: { className: 'fw-semibold' }
    },
    {
      label: 'Loại sản phẩm',
      key: 'category'
    },
    {
      label: 'Giá sản phẩm',
      key: 'price',
      filter: true,
      sorter: false,
      _style: { width: '20%' }
    },
    { label: 'Đánh giá', key: 'rating', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { color: 'primary', className: 'fw-semibold' }
    }
  ]

  return (
    <div>
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <div className="mb-3">
          <CFormSelect aria-label="Default select example" onChange={(e) => setShopId(e.target.value)}>
            <option value="1">Chọn shop</option>
            {listShop.map((shop) => {
              return (
                <option value={shop._id} key={shop._id}>
                  {shop.name}
                </option>
              )
            })}
          </CFormSelect>
        </div>

        {dataProducts.length != 0 ? (
          <TableProduct columns={columns} usersData={dataProducts} />
        ) : (
          'Không có sản phẩm nào'
        )}
      </Suspense>
    </div>
  )
}
export default DeleteProduct
