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
import { _changeLogForm, _showLogForm } from '../redux/action/changeFormAction'

export default function RegisterForm() {
  const dispatch = useDispatch()
  // const initial = {
  //   firstName: '',
  //   lastName: '',
  //   phoneNumber: '',
  //   username: '',
  //   password: '',
  //   rePassword: '',
  //   address: '',
  //   email: '',
  // }
  // const [payload, setPayload] = useState(initial)
  // // const [status, setStatus] = useState(initial)
  // // const [suggest, setSuggest] = useState(initial)
  // // const [loading, setLoading] = useState(false)
  const handleLogin = () => {
    dispatch(_changeLogForm('login'))
  }
  return (
    <div>
      <>
        <ModalHeader>Đăng Ký</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label style={{ fontWeight: 'bold', marginBottom: '10px' }} htmlFor='username'>
                Tên đăng nhập
              </Label>
              <Input type='text' id='username' name='username' />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontWeight: 'bold', marginBottom: '10px' }} htmlFor='username'>
                Họ
              </Label>
              <Input type='text' id='username' name='username' />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontWeight: 'bold', marginBottom: '10px' }} htmlFor='username'>
                Tên đệm
              </Label>
              <Input type='text' id='username' name='username' />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontWeight: 'bold', margin: '12px 0' }} htmlFor='password'>
                Mật khẩu{' '}
              </Label>
              <Input type='password' id='password' name='password' />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontWeight: 'bold', margin: '12px 0' }} htmlFor='password'>
                Nhập lại mật khẩu{' '}
              </Label>
              <Input type='password' id='repassword' name='repassword' />
            </FormGroup>
            <Row style={{ marginTop: '20px' }}>
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
    </div>
  )
}
