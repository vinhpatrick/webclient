import React, { useState, useEffect, Suspense } from 'react'
import { getShops, getOrders, confirmOrder, cancelOrder } from '../../../services/api/sellerApi'
import { CSmartTable, CBadge, CFormSelect, CButton, CCollapse, CCardBody } from '@coreui/react-pro'
import { ORDER_STATUSES_MAPPING } from 'accommerce-helpers'
import {
  CTableRow,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CHeaderBrand,
  CCol,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CInputGroupText,
  CRow
} from '@coreui/react'
import { useToast } from '../../../contexts/toast'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import numberSeparator from '../../../helpers/validating/numberSeparator'

const { confirm } = Modal

const Order = ({ getStatus }) => {
  const columns = [
    {
      label: 'Tên người nhận hàng',
      key: 'name',
      _style: { width: '40%' },
      _props: { className: 'fw-semibold' }
    },
    {
      label: 'Số điện thoại',
      key: 'phone'
    },
    {
      label: 'Địa chỉ',
      key: 'receivingAddress',
      filter: true,
      sorter: false,
      _style: { width: '20%' }
    },
    { label: 'Trạng thái', key: 'status', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { color: 'primary', className: 'fw-semibold' }
    }
  ]
  const [listShop, setListShop] = useState([])
  const [listOrder, setListOrder] = useState([])
  const [shopId, setShopId] = useState('0')
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const { error, warn, info, success } = useToast()

  useEffect(() => {
    getShops({}).then((response) => {
      setListShop(response.data.data)
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    if (shopId != '0') {
      getOrders(shopId, getStatus).then((response) => {
        response.data.data.map((data, i) => {
          data.idOrder = data._id
        })
        setListOrder(response.data.data)
        setLoading(false)
      })
    }
  }, [shopId, loading])
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
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const cfOrder = (idOrder) => {
    confirmOrder(shopId, idOrder)
      .then((respone) => {
        success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        error(err.response.data.message)
      })
  }

  const clOrder = (idOrder) => {
    cancelOrder(shopId, idOrder)
      .then((respone) => {
        success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        error(err.response.data.message)
      })
  }
  const showDeleteConfirm = (idOrder) => {
    confirm({
      title: 'Bạn chắc chắn hủy đơn hàng này?',
      icon: <ExclamationCircleOutlined />,
      style: { top: 200 },
      okText: 'Đồng ý',
      okType: 'danger',
      cancelText: 'Quay lại',
      onOk() {
        clOrder(idOrder)
        setLoading(true)
      },
      onCancel() {
        setLoading(false)
      }
    })
  }

  return (
    <div>
      <div className="mb-3">
        <CFormSelect
          aria-label="Default select example"
          onChange={(e) => {
            setShopId(e.target.value)
            setLoading(true)
          }}
        >
          <option value="0">Chọn shop</option>
          {listShop.map((shop) => {
            return (
              <option value={shop._id} key={shop._id}>
                {shop.name}
              </option>
            )
          })}
        </CFormSelect>
      </div>
      <CSmartTable
        activePage={3}
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        loading={loading}
        items={listOrder}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        noItemsLabel="Chưa có đơn hàng nào chờ xác nhận."
        scopedColumns={{
          name: (item) => (
            <td>
              {item.customer.lastName} {item.customer.firstName}
            </td>
          ),
          phone: (item) => <td>{item.customer.phoneNumber}</td>,
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{ORDER_STATUSES_MAPPING[item.status]}</CBadge>
            </td>
          ),
          show_details: (item) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(item._id)
                  }}
                >
                  {details.includes(item._id) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item._id)}>
                <CCardBody>
                  <CHeaderBrand htmlFor="exampleFormControlInput1">Danh sách sản phẩm của đơn hàng</CHeaderBrand>
                  <CTable hover>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Tên sản phẩm</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Size</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Số lượng</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Giá sản phẩm</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    {item.items.map((data, i) => {
                      return (
                        <CTableBody>
                          <CTableRow>
                            <CTableDataCell>{data.product.name}</CTableDataCell>
                            <CTableDataCell>{data.size}</CTableDataCell>
                            <CTableDataCell>{data.quantity}</CTableDataCell>
                            <CTableDataCell>{numberSeparator(data.price)} VNĐ</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      )
                    })}
                  </CTable>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Nơi lấy hàng</CFormLabel>
                    <CFormInput type="text" disabled value={item.sellingAddress} />
                  </div>
                  <div className="mb-3">
                    <CRow>
                      <CCol xs>
                        <CFormLabel htmlFor="exampleFormControlInput1">Giá vận chuyển</CFormLabel>
                        <CInputGroup>
                          <CFormInput type="text" disabled value={numberSeparator(item.shippingCost)} />
                          <CInputGroupText>VNĐ</CInputGroupText>
                        </CInputGroup>
                      </CCol>
                      <CCol xs>
                        <CFormLabel htmlFor="exampleFormControlInput1">Tổng giá trị đơn hàng</CFormLabel>
                        <CInputGroup>
                          <CFormInput
                            type="text"
                            disabled
                            value={numberSeparator(item.shippingCost + item.totalPrice)}
                          />
                          <CInputGroupText>VNĐ</CInputGroupText>
                        </CInputGroup>
                      </CCol>
                    </CRow>
                  </div>
                  {item.status == 'Waiting for seller confirm' ? (
                    <div className="mb-3">
                      <CRow>
                        <CCol xs>
                          <CButton
                            disable={loading}
                            color="success"
                            onClick={() => {
                              setLoading(true)
                              cfOrder(item.idOrder)
                            }}
                          >
                            {' '}
                            Xác nhận{' '}
                          </CButton>
                        </CCol>
                        <CCol>
                          <CButton
                            disable={loading}
                            color="danger"
                            onClick={() => {
                              showDeleteConfirm(item.idOrder)
                            }}
                          >
                            {' '}
                            Hủy{' '}
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                  ) : (
                    ''
                  )}
                </CCardBody>
              </CCollapse>
            )
          }
        }}
        sorterValue={{ column: 'name', state: 'asc' }}
        tableFilter
        tableProps={{
          striped: true,
          hover: true
        }}
      />
    </div>
  )
}

export default Order
