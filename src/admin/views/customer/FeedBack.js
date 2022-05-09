import React, { useState, useEffect } from 'react'
import { getFeedBacks } from '../../../api/adminApi'
import {
  CSmartTable,
  CBadge,
  CFormSelect,
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CCardBody,
  CCollapse,
  CHeader as h1,
} from '@coreui/react-pro'
// import { CSmartTable, CButton, CCollapse, CCardBody, CSpinner } from '@coreui/react-pro'

const TableUser = () => {
  const columns = [
    {
      label: 'FirstName',
      key: 'firstname',
      // _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'LastName',
      key: 'lastname',
      // _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Số điện thoại',
      key: 'telnum',
      // _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Email',
      key: 'email',
    },
    // {
    //   label: 'Liên hệ',
    //   key: 'contactType',
    //   filter: true,
    //   sorter: false,
    //   // _style: { width: '25%' },
    // },
    // {
    //   label: 'Số điện thoại',
    //   key: 'phoneNumber',
    //   filter: true,
    //   _style: { width: '100%' },
    // },
  ]
  const [users, setUsers] = useState([])
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getFeedBacks().then((response) => {
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
        activePage={1}
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
        scopedColumns={{
          show_details: (item) => {
            return (
              <td className='py-2'>
                <div>
                  <CButton
                    color='primary'
                    variant='outline'
                    shape='square'
                    size='sm'
                    // onClick={() => {
                    //   toggleDetails(item._id)
                    // }}
                  >
                    {details.includes(item._id) ? 'Hide' : 'Show'}
                  </CButton>
                  {/* {type === 'fix' ? (
                    ''
                  ) : ( */}
                  {/* <input
                      className='form-check-input'
                      type='checkbox'
                      idDelete={idDelete.includes(item._id)}
                      onChange={() => handleCheck(item._id)}
                      id='checkProduct'
                    ></input>
                  )} */}
                </div>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item._id)}>
                <CCardBody>
                  {/* {type === 'fix' ? <FormDetail data={item} /> : <FormDetailDelete data={item} />} */}
                </CCardBody>
              </CCollapse>
            )
          },
        }}
      />
    </div>
  )
}

export default TableUser
