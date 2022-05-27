import { Spin } from 'antd'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../css_modules/css/all.module.css'
import { _getMyCart } from '../redux/action/cartAction'
import { _showLogForm } from '../redux/action/changeFormAction'
const Carts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, data } = useSelector((state) => state.cart)
  const auth = useSelector((state) => state.logForm.isAuthenticated)

  useEffect(() => {
    // console.log('mouting')
    // return () => {
    //   console.log('unmout')
    // }
    if (auth) dispatch(_getMyCart())
  }, [])
  const handleCartClick = (e) => {
    if (!auth) {
      dispatch(_showLogForm())
    } else {
      navigate('/cart')
    }
  }

  return (
    <>
      <div
        style={{ marginLeft: '15px', marginTop: '3px' }}
        className={`${styles['widget-header']} ${styles['mr-3']}`}
      >
        <span onClick={handleCartClick} className='hover-log fa fa-shopping-cart fa-2x'></span>
        <span
          className={`${styles['badge']} ${styles['badge-pill']} ${styles['badge-danger']} ${styles['notify']}`}
        >
          <Spin spinning={loading}>{data.length}</Spin>
        </span>
      </div>
    </>
  )
}
export default memo(Carts)
