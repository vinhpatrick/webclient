import { message as Message, Spin } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import { register } from '../api/userApi'
import validateInput from '../helpers/validating/validateInput'
import { _changeLogForm } from '../redux/action/changeFormAction'

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
          Message.success('B???n ???? ????ng k?? t??i kho???n th??nh c??ng!')
          dispatch(_changeLogForm('login'))
        })
        .catch(function (error) {
          setLoading(false)
          Message.error('L???i h??? th???ng vui l??ng th??? l???i sau!!')
          console.log(error)
        })
    }
  }
  return (
    <div>
      <Spin spinning={loading}>
        <>
          <ModalHeader toggle={toggle}>????ng K??</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleRegister} style={{ textAlign: 'center' }}>
              <FormGroup>
                <Row>
                  <Col xs='4'>
                    <Label style={{ fontWeight: 'bold' }} htmlFor='username'>
                      T??n ????ng nh???p
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
                      H???
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
                      T??n ?????m
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
                      M???t kh???u{' '}
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
                      Nh???p l???i m???t kh???u
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
                      S??? ??i???n tho???i{' '}
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
                      ?????a ch???{' '}
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
                    ????ng Nh???p
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
                    ????ng K??
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
