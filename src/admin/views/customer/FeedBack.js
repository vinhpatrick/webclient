import {
  CButton, CCardBody, CCol, CCollapse, CRow, CSmartTable, CSpinner
} from '@coreui/react-pro'
import React, { useEffect, useState } from 'react'
import { getFeedBacks } from '../../../api/adminApi'
import FormDetailFeedback from '../../components/FormDetailFeedback'
// import { CSmartTable, CButton, CCollapse, CCardBody, CSpinner } from '@coreui/react-pro'

const TableUser = () => {
  const columns = [
    {
      label: 'FirstName',
      key: 'firstname',
      _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'LastName',
      key: 'lastname',
      _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Số điện thoại',
      key: 'telnum',
      _style: { width: '25%' },
      _props: { className: 'fw-semibold' },
    },
    {
      label: 'Email',
      key: 'email',
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { color: 'primary', className: 'fw-semibold' },
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
  const idFeedback = []
  users.map((user, i) => {
    idFeedback[i] = user._id
    user.idFeedback = user._id
  })
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

  return (
    <div>
      <div className='mb-3'>
        <CRow>
          <CCol xs='9'>
            <h2>Danh sách các phản hồi của khách hàng </h2>
          </CCol>
        </CRow>
      </div>
      <CSmartTable
        activePage={1}
        cleaner
        clickableRows
        columns={columns}
        noItemsLabel='Chưa có phản hồi nào!'
        columnFilter
        columnSorter
        loading={loading}
        items={users}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
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
                    onClick={() => {
                      toggleDetails(item._id)
                    }}
                  >
                    {details.includes(item._id) ? 'Hide' : 'Show'}
                  </CButton>
                  <input
                    className='form-check-input'
                    type='checkbox'

                    id='checkProduct'
                  ></input>
                </div>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item._id)}>
                <CCardBody>
                  <FormDetailFeedback data={item} />
                </CCardBody>
              </CCollapse>
            )
          },
        }}
        sorterValue={{ column: 'name', state: 'asc' }}
        tableFilter
        tableHeadProps={{
          color: 'none',
        }}
        tableProps={{
          striped: true,
          hover: true,
        }}
      />
      <>
        <CButton disabled={loading} color='danger'>
          {!loading ? '' : <CSpinner component='span' size='sm' aria-hidden='true' />} Xóa{' '}
        </CButton>
      </>
    </div>
  )
}

export default TableUser
