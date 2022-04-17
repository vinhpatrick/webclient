import Order from '../../components/Order'

const WaitingOrder = () => {
  return (
    <div>
      <Order getStatus={{ status: 'Waiting for seller confirm' }} />
    </div>
  )
}

export default WaitingOrder
