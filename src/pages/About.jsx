import { Card, CardBody, CardHeader, Media } from 'reactstrap'
import Layout from '../layout/Layout'

const About = () => {
  return (
    <Layout>
      <div className='container page-wishlist'>
        <div className='row'>
          <div className='col-12 page-title'>
            <h3>Thông tin về chúng tôi</h3>
            <hr />
          </div>
        </div>
        <div className='row row-content'>
          <div className='col-12 col-md-6'>
            <h2>Lịch sử phát triển</h2>
            <p>
              Vào năm 2022, Vmobile được ra mắt tại Việt Nam với định hướng là website thương mại
              điện tử tử phát triển chủ yếu trên laptop, hoạt động như một mạng xã hội phục vụ nhu
              cầu mua bán mọi lúc, mọi nơi cho người dùng. Tích hợp hệ thống vận hành, giao nhận và
              hỗ trợ về khâu thanh toán, Vmobile là bên trung gian giúp việc mua sắm trực tuyến dễ
              dàng và an toàn hơn cho cả bên mua lẫn bên bán.
            </p>
            <p>
              Mô hình ban đầu của Vmobile Việt Nam là C2C Marketplace - Trung gian trong quy trình
              mua bán giữa các cá nhân với nhau.Tuy nhiên, hiện nay Vmobile Việt Nam đã trở thành mô
              hình lai khi có cả B2C (doanh nghiệp đến người tiêu dùng). Vmobile đã tính phí của
              người bán / hoa hồng và phí đăng bán sản phẩm.
            </p>
          </div>
          <div className='col-12 col-md-5'>
            <Card>
              <CardHeader className='bg-primary text-white'>Sơ lược về chúng tôi</CardHeader>
              <CardBody>
                <dl className='row p-1'>
                  <dt className='col-6'>Bắt đầu</dt>
                  <dd className='col-6'>Tháng 3-2021</dd>
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
          {/* <div className='col-12 col-md-5'>
            <Card>
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
            </Card>
          </div> */}
        </div>
        <div className='row row-content'>
          <div className='col-12'>
            <h2>Quản lý cửa Hàng</h2>
          </div>
          <Media tag='li'>
            <Media left middle>
              <Media
                object
                src={`${process.env.PUBLIC_URL}/assets/images/avartar.jpg`}
                alt='avatar'
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
