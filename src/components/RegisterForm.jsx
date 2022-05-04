import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  ModalHeader,
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  ModalBody,
  Row,
  Col,
  ModalFooter,
} from 'reactstrap'
import { Spin, message as Message } from 'antd'
import { _changeLogForm, _showLogForm } from '../redux/action/changeFormAction'
import { register } from '../api/userApi'
import validateInput from '../helpers/validating/validateInput'

export default function RegisterForm(props) {
  const toggle = props.isToggle
  const dispatch = useDispatch()
  const initial = {
    firstname: '',
    lastname: '',
    phoneNumber: '',
    username: '',
    password: '',
    rePassword: '',
    address: '',
    email: '',
  }
  const [payload, setPayload] = useState(initial)
  const [status, setStatus] = useState(initial)
  const [suggest, setSuggest] = useState(initial)
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setPayload(initial)
    setStatus(initial)
    setSuggest(initial)
    dispatch(_changeLogForm('login'))
  }
  const handleValueChange = (e) => {
    setStatus({ ...status, [e.target.name]: '' })
    setSuggest({ ...suggest, [e.target.name]: '' })
    setPayload({ ...payload, [e.target.name]: e.target.value.trim() })
  }
  const handleRegister = (e) => {
    e.preventDefault()
    const validated = validateInput(payload)
    let errCount = 0
    const newStatus = {}
    const newSuggest = {}
    const keys = Object.keys(initial)
    keys.forEach((key) => {
      if (validated[`${key}`]) {
        newStatus[`${key}`] = 'error'
        newSuggest[`${key}`] = validated[`${key}`]
        errCount++
      } else {
        newStatus[`${key}`] = 'success'
      }
    })
    setStatus(newStatus)
    setSuggest(newSuggest)
    if (!errCount) {
      setLoading(true)
      const { firstname, lastname, phoneNumber, username, password, email, address } = payload
      const vPayload = { ...payload, username: username.toLowerCase() }
      register(vPayload)
        .then(function (response) {
          setLoading(false)
          Message.success('Bạn đã đăng ký tài khoản thành công!')
          dispatch(_changeLogForm('login'))
        })
        .catch(function (error) {
          setLoading(false)
          Message.error('Lỗi hệ thống vui lòng thử lại sau!!')
          console.log(error)
        })
    }
  }
  return (
    <div>
      <Spin spinning={loading}>
        <>
          <ModalHeader toggle={toggle}>Đăng Ký</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleRegister} style={{ textAlign: 'center' }}>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='username'>
                      Tên đăng nhập
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input type='text' id='username' name='username' onChange={handleValueChange} />
                    <span style={{ color: 'red' }}>{suggest.username}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='username'>
                      Họ
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input
                      type='text'
                      id='firstname'
                      name='firstname'
                      onChange={handleValueChange}
                    />
                    <span style={{ color: 'red' }}>{suggest.firstname}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='username'>
                      Tên đệm
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input type='text' id='lastname' name='lastname' onChange={handleValueChange} />
                    <span style={{ color: 'red' }}>{suggest.lastname}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='password'>
                      Mật khẩu{' '}
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input
                      type='password'
                      id='password'
                      name='password'
                      onChange={handleValueChange}
                    />
                    <span style={{ color: 'red' }}>{suggest.password}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='password'>
                      Nhập lại mật khẩu
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input
                      type='password'
                      id='rePassword'
                      name='rePassword'
                      onChange={handleValueChange}
                    />
                    <span style={{ color: 'red' }}>{suggest.rePassword}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='password'>
                      Số điện thoại{' '}
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input
                      type='text'
                      id='phoneNumber'
                      name='phoneNumber'
                      onChange={handleValueChange}
                    />
                    <span style={{ color: 'red' }}>{suggest.phoneNumber}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='password'>
                      Địa chỉ{' '}
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input type='text' id='address' name='address' onChange={handleValueChange} />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='password'>
                      Email
                    </Label>
                  </Col>
                  <Col xs='8'>
                    <Input type='text' id='email' name='email' onChange={handleValueChange} />
                    <span style={{ color: 'red' }}>{suggest.email}</span>
                  </Col>
                </Row>
              </FormGroup>

              <Row>
                <Col xs='6' style={{ textAlign: 'center' }}>
                  <Button
                    onClick={handleLogin}
                    type='submit'
                    value='submit'
                    color='primary'
                    style={{
                      background: '41a9ff',
                      color: 'white',
                      width: '130px',
                      height: '50px',
                      borderRadius: '20px',
                    }}
                  >
                    Đăng Nhập
                  </Button>
                </Col>
                <Col xs='6' style={{ textAlign: 'center' }}>
                  <Button
                    type='submit'
                    value='submit'
                    color='primary'
                    style={{
                      background: 'orange',
                      color: 'white',
                      width: '130px',
                      height: '50px',
                      borderRadius: '20px',
                    }}
                  >
                    Đăng Ký
                  </Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter style={{ marginTop: '20px' }}></ModalFooter>
        </>
      </Spin>
    </div>
  )
}
