import React, { useState, useEffect } from 'react'
import { getShops } from '../../../../services/api/sellerApi'
import { CSmartTable, CBadge, CFormSelect, CRow, CCol, CFormLabel, CHeader as h1 } from '@coreui/react-pro'

const TableShop = () => {
  const columns = [
    {
      label: 'Tên cửa hàng',
      key: 'name',
      _style: { width: '40%' },
      _props: { className: 'fw-semibold' }
    },
    {
      label: 'Email',
      key: 'email'
    },
    {
      label: 'Địa chỉ',
      key: 'address',
      filter: true,
      sorter: false,
      _style: { width: '20%' }
    },
    { label: 'Trạng thái phê duyệt', key: 'approvalStatus', filter: false, _style: { width: '100%' } }
  ]
  const [listShop, setListShop] = useState([])
  const [status, setStatus] = useState('approved')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getShops({ approvalStatus: status }).then((response) => {
      setListShop(response.data.data)
      setLoading(false)
    })
  }, [status])

  const getBadge = (approvalStatus) => {
    switch (approvalStatus) {
      case 'approved':
        return 'success'
      case 'pending':
        return 'warning'
      case 'rejected':
        return 'danger'
      default:
        return 'primary'
    }
  }

  return (
    <div>
      <div className="mb-3">
        <CRow>
          <CCol xs="9">
            <h2>Danh sách các cửa hàng đã đăng ký </h2>
          </CCol>
          {/* <CCol xs></CCol>
        <CCol xs></CCol>
        <CCol xs></CCol> */}
          <CCol xs="3">
            <CFormLabel htmlFor="exampleFormControlInput1">Trạng thái đang xem</CFormLabel>
            <CFormSelect
              aria-label="Default select example"
              onChange={(e) => {
                setStatus(e.target.value)
                setLoading(true)
              }}
            >
              <option value="approved">approved</option>
              <option value="pending">pending</option>
              <option value="rejected">rejected</option>
            </CFormSelect>
          </CCol>
        </CRow>
      </div>
      <CSmartTable
        activePage={3}
        cleaner
        clickableRows
        columns={columns}
        noItemsLabel="Chưa có cửa hàng nào"
        columnSorter
        loading={loading}
        items={listShop}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        scopedColumns={{
          approvalStatus: (item) => (
            <td>
              <CBadge color={getBadge(item.approvalStatus)}>{item.approvalStatus}</CBadge>
            </td>
          )
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

export default TableShop
