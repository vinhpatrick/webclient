import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const { id, name, price, oldPrice, imageUrl } = props

  return (
    <Card className="card-item-hover">
      <Link to={`/products/${id}`}>
        <CardImg src={`${imageUrl}`} alt="" />
      </Link>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div style={{ display: 'flex' }}>
          <CardText className="card-price">{price}</CardText>
          <CardText className="card-price-old">{oldPrice}</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default Product
