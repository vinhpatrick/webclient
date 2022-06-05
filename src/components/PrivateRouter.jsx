import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const PrivateRouter = ({ children }) => {
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const admin = localStorage.getItem('admin')
  if (!auth) {
    alert('Bạn cần đăng nhập để tiếp tục chức năng này...')
    return <Navigate to='/' />
  }
  return children
}
export const AdminRouter = ({ children }) => {
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const admin = localStorage.getItem('admin')
  if ((auth && admin === 'false') || !admin) {
    alert('Chỉ quản trị viên mới có quyền vào trang quản trị ...')
    return <Navigate to='/' />
  }
  return children
}
