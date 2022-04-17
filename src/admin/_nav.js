import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cil3d, cilLibraryAdd, cilFeaturedPlaylist, cilSpeedometer, cibShopify } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Tổng quan',
    to: '/seller',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    component: CNavTitle,
    name: 'Quản lý cửa hàng'
  },
  {
    component: CNavItem,
    name: 'Danh sách cửa hàng',
    to: '/seller/shops',
    icon: <CIcon icon={cibShopify} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Thêm cửa hàng',
    to: '/seller/register-shop',
    icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Quản lý sản phẩm'
  },
  {
    component: CNavGroup,
    name: 'Sản phẩm',
    to: '/seller/add-product',
    icon: <CIcon icon={cilFeaturedPlaylist} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Thêm sản phẩm',
        to: '/seller/add-product'
      },
      {
        component: CNavItem,
        name: 'Danh sách sản phẩm',
        to: '/seller/change-product'
      },
      {
        component: CNavItem,
        name: 'Xóa sản phẩm',
        to: '/seller/delete-product'
      }
    ]
  },
  {
    component: CNavTitle,
    name: 'Quản lý đơn hàng'
  },
  {
    component: CNavGroup,
    name: 'Đơn hàng',
    to: '/seller/a',
    icon: <CIcon icon={cil3d} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách đơn hàng',
        to: '/seller/orders'
      },
      {
        component: CNavItem,
        name: 'Đơn hàng chờ xác nhận',
        to: '/seller/waiting-orders'
      }
    ]
  },
  {
    component: CNavTitle,
    name: 'Extras'
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/seller/statistics',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />
  }
]

export default _nav
