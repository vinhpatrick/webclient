import React, { useState, useRef, Component } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    <Slider {...settings}>
      <div>
        <section
          className='welcome_area bg-img background-overlay'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner1.png)` }}
        >
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12'>
                <div className='hero-content'>
                  <h6>Shelby</h6>
                  <h2>Vinh Shelby Mobile</h2>
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
                  <h6>Shelby</h6>
                  <h2>Vinh Shelby Mobile</h2>
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
                  <h6>Shelby</h6>
                  <h2>Vinh Shelby Mobile</h2>
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
                  <h6>Shelby</h6>
                  <h2>Vinh Shelby Mobile</h2>
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
                  <h6>Shelby</h6>
                  <h2>Vinh Shelby Mobile</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  )
}
