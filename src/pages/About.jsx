import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const About = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3>Thông tin về chúng tôi</h3>
            <hr />
          </div>
        </div>
        <div className='row row-content'>
          <div className='col-12 col-md-6'>
            <h2>Lịch sử phát triển</h2>
            <p>
              Được thành lập vào năm 2010, Ristorante con Fusion nhanh chóng trở thành một biểu
              tượng ẩm thực xuất sắc ở Hồng Kông. Với thương hiệu độc đáo của nền ẩm thực kết hợp
              thế giới có thể không tìm thấy ở đâu khác, nó nhận được sự bảo trợ từ khách hàng hạng
              A ở Hồng Kông. Với bốn trong số các đầu bếp ba sao Michelin giỏi nhất trên thế giới,
              bạn sẽ không bao giờ biết điều gì sẽ đến trên đĩa của bạn vào lần tiếp theo bạn đến
              thăm chúng tôi.
            </p>
            <p>
              Nhà hàng đánh dấu sự khởi đầu khiêm tốn của mình cho đến <em> The Frying Pan </em>,
              một thành công chuỗi do Giám đốc điều hành của chúng tôi, ông Peter Pan, bắt đầu, lần
              đầu tiên xuất hiện trên thế giới các món ăn ngon nhất trên chảo.
            </p>
          </div>
          <div className='col-12 col-md-5'>
            <Card>
              <CardHeader className='bg-primary text-white'>Sơ lược về chúng tôi</CardHeader>
              <CardBody>
                <dl className='row p-1'>
                  <dt className='col-6'>Bắt đầu</dt>
                  <dd className='col-6'>3 Tháng. 2013</dd>
                  <dt className='col-6'>Cổ đông chính</dt>
                  <dd className='col-6'>Đồng Văn Vinh.</dd>
                  <dt className='col-6'>Doanh thu của năm ngoái</dt>
                  <dd className='col-6'>$1,250,375</dd>
                  <dt className='col-6'>Nhân viên</dt>
                  <dd className='col-6'>40</dd>
                </dl>
              </CardBody>
            </Card>
          </div>
          <div className='col-12'>
            {/* <Card>
              <CardBody className='bg-faded'>
                <blockquote className='blockquote'>
                  <p className='mb-0'>
                    You better cut the pizza in four pieces because I'm not hungry enough to eat
                    six.
                  </p>
                  <footer className='blockquote-footer'>
                    Yogi Berra,
                    <cite title='Source Title'>
                      The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014
                    </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card> */}
          </div>
        </div>
        <div className='row row-content'>
          <div className='col-12'>
            <h2>Quản lý cửa Hàng</h2>
          </div>
          <Media tag='li'>
            <Media left middle>
              <Media
                object
                src='https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/257977999_3141760336104527_6914593917575493290_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=q5rWvwlngRMAX8mJomO&_nc_ht=scontent.fhan5-11.fna&oh=00_AT_05IQEo4Xhj_Ww6g8gg-C47c22J08nu0E05J7WxOKHgg&oe=62631627'
                alt='vinhok'
              />
            </Media>
            <Media body className='ml-5'>
              <Media heading>Đồng Văn Vinh</Media>
              {/* <p>{leader.designation}</p> */}
              <p>Là người đầu tiên thành lập công ty</p>
            </Media>
          </Media>
        </div>
      </div>
    </Layout>
  )
}

export default About
