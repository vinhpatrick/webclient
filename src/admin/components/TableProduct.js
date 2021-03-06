import { ExclamationCircleOutlined } from '@ant-design/icons'
import { CButton, CCardBody, CCollapse, CSmartTable, CSpinner } from '@coreui/react-pro'
import { Modal } from 'antd'
import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { toast } from 'react-toastify'
import { deleteProduct } from '../../api/adminApi'
import numberSeparator from '../../helpers/validating/numberSeparator'
import FormDetail from './FormDetail'
import FormDetailDelete from './FormDetailDelete'

const { confirm } = Modal
const TableProduct = ({ columns, usersData, type }) => {
  const [details, setDetails] = useState([])
  const [idDelete, setIdDelete] = useState([])
  const [loading, setLoading] = useState(false)

  const idProduct = []
  const idDeleteProduct = {
    productIds: [],
  }
  usersData.map((data, i) => {
    idProduct[i] = data._id
    data.idProduct = data._id
  })

  const handleDelete = (e) => {
    setLoading(true)
    idDelete.map((id, i) => (idDeleteProduct.productIds[i] = idProduct[id]))
    if (idDeleteProduct.productIds.length == 0) {
      toast.warning('Vui lòng chọn sản phẩm cần xóa')
    } else {
      deleteProduct(idDeleteProduct)
        .then((respone) => {
          setIdDelete([])
          toast.success('Xóa sản phẩm thành công', { autoClose: 2000 })
          setTimeout(window.location.reload(), 3000)
        })
        .catch((err) => {
          {
            toast.error('Có lỗi vui lòng thử lại sau', { autoClose: 2000 })
          }
        })
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
  const handleCheck = (id) => {
    setIdDelete((prev) => {
      const isChecked = idDelete.includes(id)
      if (isChecked) {
        return idDelete.filter((item) => item != id)
      } else {
        return [...prev, id]
      }
    })
  }
  const showDeleteConfirm = () => {
    if (idDelete.length == 0) {
      toast.warning('Vui lòng chọn sản phẩm cần xóa', { autoClose: 2000 })
    } else {
      confirm({
        title: 'Bạn chắc chắn xóa sản phẩm này?',
        icon: <ExclamationCircleOutlined />,
        style: { top: 200 },
        okText: 'Đồng ý',
        okType: 'danger',
        cancelText: 'Quay lại',
        onOk() {
          handleDelete()
        },
        onCancel() {
          setLoading(false)
        },
      })
    }
  }
  return (
    <div>
      <CSmartTable
        activePage={1}
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        loading={loading}
        items={usersData}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        scopedColumns={{
          rating: (item) => (
            <td>
              <ReactStars size={30} value={item.rating} edit={false} disable />
            </td>
          ),
          price: (item) => <td>{numberSeparator(item.price)} VNĐ</td>,
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
                  {type === 'fix' ? (
                    ''
                  ) : (
                    <input
                      className='form-check-input'
                      type='checkbox'
                      idDelete={idDelete.includes(item._id)}
                      onChange={() => handleCheck(item._id)}
                      id='checkProduct'
                    ></input>
                  )}
                </div>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item._id)}>
                <CCardBody>
                  {type === 'fix' ? <FormDetail data={item} /> : <FormDetailDelete data={item} />}
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
        {type === 'fix' ? (
          ''
        ) : (
          <CButton disabled={loading} onClick={showDeleteConfirm} color='danger'>
            {!loading ? '' : <CSpinner component='span' size='sm' aria-hidden='true' />} Xóa{' '}
          </CButton>
        )}
      </>
    </div>
  )
}

export default TableProduct
