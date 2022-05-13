import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-4 offset-1 col-sm-2'>
              <h5>Liên Kết</h5>
              <ul className='list-unstyled'>
                <li className='link-footer'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='link-footer'>
                  <Link to='/favorites'>Wishlist</Link>
                </li>
                <li className='link-footer'>
                  <Link to='/aboutus'>About Us</Link>
                </li>
                <li className='link-footer'>
                  <Link to='/contactus'>Contact Us</Link>
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
              <div className='text-center'>
                <a className='btn btn-social-icon btn-google' href='http://google.com/+'>
                  <i className='fa fa-google-plus'></i>
                </a>
                <a
                  className='btn btn-social-icon btn-facebook'
                  href='http://www.facebook.com/profile.php?id='
                >
                  <i className='fa fa-facebook'></i>
                </a>
                <a className='btn btn-social-icon btn-linkedin' href='http://www.linkedin.com/in/'>
                  <i className='fa fa-linkedin'></i>
                </a>
                <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/'>
                  <i className='fa fa-twitter'></i>
                </a>
                <a className='btn btn-social-icon btn-google' href='http://youtube.com/'>
                  <i className='fa fa-youtube'></i>
                </a>
                <a className='btn btn-social-icon' href='mailto:'>
                  <i className='fa fa-envelope-o'></i>
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

export default Footer;