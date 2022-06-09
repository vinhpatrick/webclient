import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function BannerTop() {
  const ref = useRef({})

  const next = () => {
    ref.current.slickNext()
  }

  const previous = () => {
    ref.current.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  }
  return (
    <Slider className='banner-top' {...settings}>
      <div className=''>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner1.png)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  <h6  style={{color: 'red'}}>Chào hè 2022 tuần lễ vàng từ 19/6-25/6</h6>
                  <h2  style={{color: 'red'}}>Hãy mua sắm ngay nào</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner3.png)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  <h6  style={{color: 'red'}}>Hè 2022</h6>
                  <h2 style={{color: 'red'}}>Rất nhiều sản phẩm sale<br/> lên tới 50%</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner2.png)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  <h6></h6>
                  <h2 style={{color: 'red',marginLeft:'300px' }} >Hãy mang cả thới giới <br/>công nghệ về nhà bạn</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner5.png)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  <h6 style={{color: 'red' }}>Tiệc sale lớn nhất năm</h6>
                  <h2 style={{color: 'red' }}>Xả kho giảm hết</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner4.png)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  <h6  style={{color: 'red'}}>Rất nhiều sản phẩm hấp dẫn đang chờ đón bạn</h6>
                  <h2  style={{color: 'red'}}>Hãy xem ngay nào</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  )
}
