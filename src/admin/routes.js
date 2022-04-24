import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const AddProduct = React.lazy(() => import('./views/products/AddProduct'))
const ChangeProduct = React.lazy(() => import('./views/products/ChangeProduct'))
const DeleteProduct = React.lazy(() => import('./views/products/DeleteProduct'))

// const TableShop = React.lazy(() => import('./views/shops/TableShop'))
// const AddShop = React.lazy(() => import('./views/shops/AddShop'))

// const TableOrder = React.lazy(() => import('./views/orders/TableOrder'))
// const WaitingOrder = React.lazy(() => import('./views/orders/WaitingOrder'))

// const Statistic = React.lazy(() => import('./views/statistic/Statistic'))

const routes = [
  { path: '/seller', name: 'Kênh bán hàng', exact: true, element: Dashboard },
  { path: '/seller/add-product', name: 'Thêm sản phẩm', element: AddProduct },
  { path: '/seller/change-product', name: 'Sửa sản phẩm', component: ChangeProduct },
  { path: '/seller/delete-product', name: 'Xóa sản phẩm', component: DeleteProduct },
  // { path: '/seller/orders', name: 'Danh sách đơn hàng', component: TableOrder },
  // { path: '/seller/waiting-orders', name: 'Đơn hàng chờ xác nhận', component: WaitingOrder },
  // { path: '/seller/shops', name: 'Danh sách cửa hàng', component: TableShop },
  // { path: '/seller/register-shop', name: 'Thêm của hàng', component: AddShop },
  // { path: '/seller/statistics', name: 'Thống kê', component: Statistic },
]

export default routes
