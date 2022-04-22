import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import styles from '../css_modules/css/all.module.css'

const ProductItem = (props) => {
  const { _id, name, images, price, originalPrice, sold, view } = props
  return (
    <>
      <div className={`${styles['col-md-3']}`}>
        <Link to={`/products/${_id}`}>
          <div className={`${styles['card']} ${styles['card-product-grid']}`}>
            <a className={`${styles['img-wrap']}`}>{images && <img src={images[0]} />}</a>
            <figcaption className={`${styles['info-wrap']}`}>
              <div
                className={`${styles['title']}`}
                style={{
                  fontWeight: 'bold',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'black',
                  height: '60px',
                  lineHeight: '30px',
                }}
              >
                {name}
              </div>
              <div className={`${styles['row']} ${styles['col-sm-12']}`}>
                <div className={`${styles['price']} ${styles['mt-1']}`} style={{ color: 'red' }}>
                  ₫ {price}
                </div>
                {price !== originalPrice && (
                  <div className={`${styles['price-old']} ${styles['mt-2']}`}>
                    <del>₫ {originalPrice}</del>
                  </div>
                )}
              </div>
              <div className={`${styles['row']} ${styles['mt-1']} ${styles['text-dark']}`}>
                <div className='col-sm-6 text-left'>
                  Đã bán <b>{sold}</b>
                </div>
                <div className='col-sm-6 text-right'>
                  <b>{view}</b> lượt xem
                </div>
              </div>
            </figcaption>
          </div>
        </Link>
      </div>

      {/* <div className='col-md-3'>
        <Link to={`/products/${_id}`}>
          <div className='card card-product-grid'>
            <a className='img-wrap'>{images && <img src={images[0]} />}</a>
            <figcaption className='info-wrap'>
              <div
                className='title'
                style={{
                  fontWeight: 'bold',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'black',
                  height: '60px',
                  lineHeight: '30px',
                }}
              >
                {name}
              </div>
              <div className='row col-sm-12'>
                <div className='price mt-1' style={{ color: 'red' }}>
                  ₫ {price}
                </div>
                {price !== originalPrice && (
                  <div className='price-old mt-2'>
                    <del>₫ {originalPrice}</del>
                  </div>
                )}
              </div>
              <div className='row mt-1 text-dark'>
                <div className='col-sm-6 text-left'>
                  Đã bán <b>{sold}</b>
                </div>
                <div className='col-sm-6 text-right'>
                  <b>{view}</b> lượt xem
                </div>
              </div>
            </figcaption>
          </div>
        </Link>
      </div> */}
    </>
    // <Card className='card-item-hover'>
    //   <Link to={`/products/${_id}`}>
    //     {images && <img src={images[0]} alt='ah' />}
    //     {/* <CardImg src={images} alt='' /> */}
    //   </Link>
    //   <CardBody>
    //     <CardTitle>{name}</CardTitle>
    //     <Row style={{ margin: '20px 0' }}>
    //       <Col xs='6'>
    //         <CardText className='card-price'>đ {price}</CardText>
    //       </Col>
    //       <Col>
    //         <CardText className='card-price-old'>{originalPrice}</CardText>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         Đã bán <b>{sold}</b>
    //       </Col>
    //       <Col style={{ marginLeft: '40px' }}>
    //         <b>{view}</b> lượt xem
    //       </Col>
    //     </Row>
    //   </CardBody>
    // </Card>
  )
}

export default ProductItem
