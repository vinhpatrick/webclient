export function sendResponse(data = true, message = 'Thành công', eMessage = 'OK', status = 200) {
  return (req, res, next) => {
    res.status(status).json({ success: true, data, message, eMessage })
  }
}

export function sendError(error, req, res, next) {
  console.error(error)

  // send response with error code
  res.status(error.status || 500).json({
    success: false,
    message: error.message,
    eMessage: error.eMessage || '',
    devInfo: { ...error, stack: error.stack },
  })
}

export function CustomError(message = '', eMessage = '', status = 400) {
  const error = new Error(message)
  error.eMessage = eMessage
  error.status = status

  return error
}

export const ORDER_STATUSES = {
  WAITING_FOR_SELLER_CONFIRM: 'Waiting for seller confirm',
  IN_TRANSIT: 'In transit',
  DELIVERED: 'Delivered',
  CANCELLED_BY_CUSTOMER: 'Cancelled by customer',
  CANCELLED_BY_SELLER: 'Cancelled by seller',
}

export const ORDER_STATUSES_MAPPING = {
  'Waiting for seller confirm': 'Chờ xác nhận',
  'In transit': 'Đang vận chuyển',
  Delivered: 'Đã giao hàng',
  'Cancelled by customer': 'Hủy bởi người mua',
  'Cancelled by seller': 'Hủy bởi người bán',
}
