import {
  cil3d, cilChartPie, cilCommentSquare, cilFeaturedPlaylist,
  cilSpeedometer, cilUser
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Tổng quan',
    to: '/seller',
    icon: <CIcon icon={cilSpeedometer} customClassName='nav-icon' />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Quản lý khách hàng',
  },
  {
    component: CNavGroup,
    name: 'Khách hàng',
    to: '/seller/customer',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    items: [{
      component: CNavItem,
      name: 'Danh sách khách hàng',
      to: '/seller/customer',
      // icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    }, {
      component: CNavItem,
      name: 'Phản hồi của khách hàng',
      to: '/seller/feedback',
      // icon: <CIcon icon={cilCommentSquare} customClassName='nav-icon' />,
    }
    ]
  },
  // {
  //   component: CNavItem,
  //   name: 'Danh sách khách hàng',
  //   to: '/seller/customer',
  //   icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Phản hồi của khách hàng',
  //   to: '/seller/feedback',
  //   icon: <CIcon icon={cilCommentSquare} customClassName='nav-icon' />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Người dùng',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Quản lý người dùng',
  //   to: '/admin/manage-users',
  //   icon: <CIcon icon={cilContact} customClassName='nav-icon' />,
  // },
  {
    component: CNavTitle,
    name: 'Quản lý sản phẩm',
  },
  {
    component: CNavGroup,
    name: 'Sản phẩm',
    to: '/seller/add-product',
    icon: <CIcon icon={cilFeaturedPlaylist} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: 'Thêm sản phẩm',
        to: '/seller/add-product',
      },
      {
        component: CNavItem,
        name: 'Danh sách sản phẩm',
        to: '/seller/change-product',
      },
      {
        component: CNavItem,
        name: 'Xóa sản phẩm',
        to: '/seller/delete-product',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Quản lý đơn hàng',
  },
  {
    component: CNavGroup,
    name: 'Đơn hàng',
    to: '/seller/a',
    icon: <CIcon icon={cil3d} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách đơn hàng',
        to: '/seller/orders',
      },
      {
        component: CNavItem,
        name: 'Đơn hàng chờ xác nhận',
        to: '/seller/waiting-orders',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/seller/statistics',
    icon: <CIcon icon={cilChartPie} customClassName='nav-icon' />,
  },
]

export default _nav
