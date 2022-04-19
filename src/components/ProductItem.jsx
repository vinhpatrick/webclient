import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const { id, name, price, oldPrice, imageUrl } = props

  return (
    <Card className='card-item-hover'>
      <Link to={`/products/${id}`}>
        <CardImg src={`${imageUrl}`} alt='' />
      </Link>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <Row style={{ margin: '20px 0' }}>
          <Col xs='6'>
            <CardText className='card-price'>đ {price}</CardText>
          </Col>
          <Col>
            <CardText className='card-price-old'>{oldPrice}</CardText>
          </Col>
        </Row>
        <Row>
          <Col>
            Đã bán <b>20</b>
          </Col>
          <Col style={{ marginLeft: '40px' }}>
            <b>30</b> lượt xem
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Product
