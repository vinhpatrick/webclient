import React from 'react'
import { Button, Label, Col, Row } from 'reactstrap'
// import { Link } from 'react-router-dom'
import { Spin, message as Message } from 'antd'
import { Control, Form, Errors, actions } from 'react-redux-form'
import Layout from '../layout/Layout'
import { useState, useEffect } from 'react'
import { postFeedback } from '../api/userApi'
import { useDispatch } from 'react-redux'

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
        Message.success('Bạn đã  gửi phản hồi thành công!')
        dispatch(actions.reset('feedback'))
        setLoading(false)
        // console.log('thanh cong', loading)
      })
      .catch((error) => {
        Message.error('Lỗi hệ thống vui lòng thử lại sau!')
        setLoading(false)
        // console.log('that bai', loading)
      })
  }
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
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
              <a href='mailto:confusion@food.net'>vinh572000@gmail.com</a>
            </address>
          </div>
          <div className='col-12 col-sm-6 offset-sm-1'>
            <h5>Bản dồ vị trí của chúng tôi</h5>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0211682182357!2d105.792010114202!3d21.031838993050666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab46184ecb01%3A0x33d1db0dcd76fc66!2zTmcuMzcgUC4gROG7i2NoIFbhu41uZywgROG7i2NoIFbhu41uZywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650358931377!5m2!1svi!2s'
              width='800'
              height='450'
              style={{ boder: '0' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='col-12 col-sm-11 offset-sm-1'>
            <div className='btn-group' role='group'>
              <a role='button' className='btn btn-primary' href='tel:+85212345678'>
                <i className='fa fa-phone'></i> Call
              </a>
              <a role='button' className='btn btn-info'>
                <i className='fa fa-skype'></i> Skype
              </a>
              <a role='button' className='btn btn-success' href='mailto:confusion@food.net'>
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
                      placeholder='First Name'
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
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less',
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
                      placeholder='Last Name'
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
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less',
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
                      placeholder='Tel. Number'
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
                        required: 'Required',
                        minLength: 'Must be greater than 2 numbers',
                        maxLength: 'Must be 15 numbers or less',
                        isNumber: 'Must be a number',
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
                        required: 'Required',
                        validEmail: 'Invalid Email Address',
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
                      <option>Tel.</option>
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
