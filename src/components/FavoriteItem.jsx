import React from 'react'
import { Media, Button, CardImg } from 'reactstrap'

export default function FavoriteItem() {
  return (
    <Media tag='li'>
      <Media left middle>
        <Media object src={`${process.env.PUBLIC_URL}/assets/images/99.jpg`} alt='hihi' />
      </Media>
      <Media body className='ml-5'>
        <Media heading>Iphone 13 promax</Media>
        <p>'đây là 1 thiết bị thật đẹp</p>
        <Button
          outline
          color='danger'
          // onClick={() => deleteFavorite(dish._id)}
        >
          <span className='fa fa-times'>Xóa</span>
        </Button>
        <Button
          style={{ marginLeft: '20px' }}
          outline
          color='danger'
          // onClick={() => deleteFavorite(dish._id)}
        >
          <span className='fa fa-shopping-cart fa-sm'>Add to cart</span>
        </Button>
      </Media>
    </Media>
  )
}
