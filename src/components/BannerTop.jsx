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
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  }
  return (
    <Slider className='banner-top' {...settings}>
      <div className=''>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/slider.jpg)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  <h6  style={{color: '#fed700'}}>Chào hè 2022 tuần lễ vàng từ 19/6-25/6</h6>
                  <h4  style={{color: '#fed700'}}>Hãy mua sắm ngay nào</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/slider2.jpg)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  {/* <h6  style={{color: 'red'}}>Hè 2022</h6>
                  <h4 style={{color: 'red'}}>Rất nhiều sản phẩm sale<br/> lên tới 50%</h4> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/slider3.jpg)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  )
}
