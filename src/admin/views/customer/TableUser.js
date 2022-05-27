import {
  CCol, CRow, CSmartTable
} from '@coreui/react-pro'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../api/adminApi'

const TableUser = () => {
  const columns = [
    {
      label: 'Tên khách hàng',
      key: 'username',
      // _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Họ',
      key: 'firstname',
      // _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Tên đệm',
      key: 'lastname',
      // _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Email',
      key: 'email',
    },
    {
      label: 'Địa chỉ',
      key: 'address',
      filter: true,
      sorter: false,
      // _style: { width: '25%' },
    },
    {
      label: 'Số điện thoại',
      key: 'phoneNumber',
      filter: true,
      _style: { width: '100%' },
    },
  ]
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <div className='mb-3'>
        <CRow>
          <CCol xs='9'>
            <h2>Danh sách các cửa hàng đã đăng ký </h2>
          </CCol>
        </CRow>
      </div>
      <CSmartTable
        activePage={3}
        cleaner
        clickableRows
        columns={columns}
        noItemsLabel='Chưa có khách hàng nào!'
        columnFilter
        columnSorter
        loading={loading}
        items={users}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        sorterValue={{ column: 'name', state: 'asc' }}
        tableFilter
        tableProps={{
          striped: true,
          hover: true,
        }}
      />
    </div>
  )
}

export default TableUser
