import React from 'react'
import { Media, Button } from 'reactstrap'

export default function FavoriteItem() {
  return (
    <Media tag='li'>
      <Media left middle>
        <Media
          style={{
            maxWidth: '200px',
            maxHeight: '200px',
            with: '150px',
            height: '150px',
          }}
          object
          src={`${process.env.PUBLIC_URL}/assets/images/7.jpg`}
          alt='hihi'
        />
      </Media>
      <Media body className='ml-5'>
        <Media heading>Iphone 13 promax</Media>
        <p>
          Galaxy S22 Ultra 5G chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series mà Samsung
          đã cho ra mắt. Tích hợp bút S Pen hoàn hảo trong thân máy, trang bị vi xử lý mạnh mẽ cho
          các tác vụ sử dụng vô cùng mượt mà và nổi bật hơn với cụm camera không viền độc đáo mang
          đậm dấu ấn riêng.
        </p>
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
