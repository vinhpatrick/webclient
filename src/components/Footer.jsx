import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4 offset-1 col-sm-2'>
            <h5>Liên Kết</h5>
            <ul className='list-unstyled'>
              <li className='link-footer'>
                <Link to='/'>Trang chủ</Link>
              </li>
              <li className='link-footer'>
                <Link to='/favorites'>Sản phẩm yêu thích</Link>
              </li>
              <li className='link-footer'>
                <Link to='/aboutus'>Thông tin shop</Link>
              </li>
              <li className='link-footer'>
                <Link to='/contactus'>Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className='col-7 col-sm-5'>
            <h5>Địa chỉ của chúng tôi</h5>
            <address>
              444-Cầu Giấy,Hà Nội,Việt Nam
              <br />
              <i className='fa fa-phone fa-lg'></i>: +84 386 259 007
              <br />
              <i className='fa fa-fax fa-lg'></i>: +84 344 661 168
              <br />
              <i className='fa fa-envelope fa-lg'></i>:{' '}
              <a style={{ color: 'black' }} href='mailto:vinh572000@gmail.com'>
                vinh572000@gmail.com
              </a>
            </address>
          </div>
          <div className='col-12 col-sm-4 align-self-center'>
            <div className='text-center footer-icon'>
              <a
                style={{ backgroundColor: '#dd4b39' }}
                className='btn btn-social-icon'
                href='http://google.com/+'
              >
                <i style={{ color: 'white' }} className='fa fa-google-plus'></i>
              </a>
              <a
                style={{ backgroundColor: '#2d4373' }}
                className='btn btn-social-icon'
                href='http://www.facebook.com/profile.php?id='
              >
                <i style={{ color: 'white' }} className='fa fa-facebook'></i>
              </a>

              <a
                style={{ backgroundColor: '#005983' }}
                className='btn btn-social-icon'
                href='http://www.linkedin.com/in/'
              >
                <i style={{ color: 'white' }} className='fa fa-linkedin'></i>
              </a>

              <a
                style={{ backgroundColor: '#2795E9' }}
                className='btn btn-social-icon '
                href='http://twitter.com/'
              >
                <i style={{ color: 'white' }} className='fa fa-twitter'></i>
              </a>
              <a
                style={{ backgroundColor: '#c23321' }}
                className='btn btn-social-icon'
                href='http://youtube.com/'
              >
                <i style={{ color: 'white' }} className='fa fa-youtube'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <p style={{ fontWeight: 'bold' }}>© Copyright 2022 vinhmobile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
