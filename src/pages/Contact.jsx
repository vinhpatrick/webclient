import { Spin } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions, Control, Errors, Form } from 'react-redux-form'
import { toast } from 'react-toastify'
import { Button, Col, Label, Row } from 'reactstrap'
import { postFeedback } from '../api/userApi'
import Layout from '../layout/Layout'

const required = (val) => val && val.length
const maxLength = (len) => (val) => !val || val.length <= len
const minLength = (len) => (val) => val && val.length >= len
const isNumber = (val) => !isNaN(Number(val))
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    setLoading(true)
    // console.log('setload', loading)
    //console.log("Current State is: " + JSON.stringify(values));
    postFeedback(values)
      .then((response) => {
        toast.success('Bạn đã  gửi phản hồi thành công!', { autoClose: 2000 })
        dispatch(actions.reset('feedback'))
        setLoading(false)
        // console.log('thanh cong', loading)
      })
      .catch((error) => {
        toast.error('Lỗi hệ thống vui lòng thử lại sau!', { autoClose: 2000 })
        setLoading(false)
        // console.log('that bai', loading)
      })
  }
  return (
    <Layout>
      <div className='container page-wishlist'>
        <div className='row'>
          <div className='col-12 page-title'>
            <h3>Liên hệ với chúng tôi</h3>
            <hr />
          </div>
        </div>
        <div className='row row-content'>
          <div className='col-12'>
            <h3>Thông tin địa điểm</h3>
          </div>
          <div className='col-12 col-sm-4 offset-sm-1'>
            <h5>Địa chỉ của chúng tôi</h5>
            <address>
              444,Cầu giấy
              <br />
              Hà nội
              <br />
              Việt Nam
              <br />
              <i className='fa fa-phone'></i>: +84 386 259 007
              <br />
              <i className='fa fa-fax'></i>: +84 344 661 168
              <br />
              <i className='fa fa-envelope'></i>:{' '}
              <a style={{ color: 'black' }} href='mailto:vinh572000@gmail.com'>
                vinh572000@gmail.com
              </a>
            </address>
          </div>
          <div className='col-12 col-sm-6 offset-sm-1'>
            <h5>Bản dồ vị trí của chúng tôi</h5>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0211682182357!2d105.792010114202!3d21.031838993050666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab46184ecb01%3A0x33d1db0dcd76fc66!2zTmcuMzcgUC4gROG7i2NoIFbhu41uZywgROG7i2NoIFbhu41uZywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650358931377!5m2!1svi!2s'
              width='800'
              height='450'
              style={{ boder: '0', maxWidth: '100%' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='col-12 col-sm-11 offset-sm-1'>
            <div className='btn-group' role='group'>
              <a role='button' className='btn btn-primary' href='tel:+85212345678'>
                <i className='fa fa-phone'></i> Gọi điện
              </a>
              <a role='button' className='btn btn-info'>
                <i className='fa fa-skype'></i> Zalo
              </a>
              <a role='button' className='btn btn-success' href='mailto:vinh572000@gmail.coms'>
                <i className='fa fa-envelope-o'></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className='row row-content'>
          <div className='col-12'>
            <h3>Gửi cho chúng tôi về phản hồi của bạn</h3>
          </div>
          <div className='col-12 col-md-9'>
            <Spin spinning={loading}>
              <Form model='feedback' onSubmit={(values) => handleSubmit(values)}>
                <Row className='form-group'>
                  <Label htmlFor='firstname' md={2}>
                    Họ
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model='.firstname'
                      id='firstname'
                      name='firstname'
                      placeholder='Họ'
                      className='form-control'
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.firstname'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập họ!',
                        minLength: 'Họ phải lớn hơn 2 ký tự ! ',
                        maxLength: 'Họ phải nhỏ hơn 15 ký tự !',
                      }}
                    />
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Label htmlFor='lastname' md={2}>
                    Tên
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model='.lastname'
                      id='lastname'
                      name='lastname'
                      placeholder='Tên'
                      className='form-control'
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.lastname'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập tên ! ',
                        minLength: 'Tên phải lớn hơn 2 ký tự !',
                        maxLength: 'Tên phải nhỏ hơn 15  ký tự !',
                      }}
                    />
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Label htmlFor='telnum' md={2}>
                    Số điện thoại.
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model='.telnum'
                      id='telnum'
                      name='telnum'
                      placeholder='Số điện thoại'
                      className='form-control'
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                        isNumber,
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.telnum'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập số điện thoại !',
                        minLength: 'Số điện thoại phải nhiều hơn 10 số !',
                        maxLength: 'Số điện thoại phải nhỏ hơn 12 số !',
                        isNumber: 'Vui lòng nhập số !',
                      }}
                    />
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Label htmlFor='email' md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model='.email'
                      id='email'
                      name='email'
                      placeholder='Email'
                      className='form-control'
                      validators={{
                        required,
                        validEmail,
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.email'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập email !',
                        validEmail: 'Email không đúng định dạng !',
                      }}
                    />
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Col md={{ size: 6, offset: 2 }}>
                    <div className='form-check'>
                      <Label check>
                        <Control.checkbox
                          model='.agree'
                          name='agree'
                          className='form-check-input'
                        />{' '}
                        <strong>Chúng tôi có thể liên hệ với bạn?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <Control.select
                      model='.contactType'
                      name='contactType'
                      className='form-control'
                    >
                      <option>Số điện thoại</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Label htmlFor='message' md={2}>
                    Phản hồi của bạn
                  </Label>
                  <Col md={10}>
                    <Control.textarea
                      model='.message'
                      id='message'
                      name='message'
                      rows='12'
                      className='form-control'
                    />
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type='submit' color='primary'>
                      Gửi phản hồi
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Spin>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
