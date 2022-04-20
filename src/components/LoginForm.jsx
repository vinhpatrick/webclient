import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { _changeLogForm, _hideLogForm } from '../redux/action/changeFormAction'
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
import { _setStatus } from '../redux/action/userAction'
import { loginUser } from '../redux/action/loginAction'

const LoginForm = (props) => {
  const dispatch = useDispatch()
  const initial = { username: '', password: '' }
  const [payload, setPayload] = useState(initial)
  const handleValueChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value.trim() })
    // dispatch(_setStatus('', ''))
  }
  const handleRegister = () => {
    dispatch(_changeLogForm('register'))
  }
  const login = (e) => {
    dispatch(loginUser({ username: payload.username, password: payload.password }))
    e.preventDefault()
  }
  return (
    <>
      <ModalHeader>Đăng Nhập</ModalHeader>
      <ModalBody>
        <Form onSubmit={login}>
          <FormGroup>
            <Label style={{ fontWeight: 'bold', marginBottom: '10px' }} htmlFor='username'>
              Tên đăng Nhập
            </Label>
            <Input type='text' id='username' name='username' onChange={handleValueChange} />
          </FormGroup>
          <FormGroup>
            <Label style={{ fontWeight: 'bold', margin: '12px 0' }} htmlFor='password'>
              Mật Khẩu{' '}
            </Label>
            <Input type='password' id='password' name='password' onChange={handleValueChange} />
          </FormGroup>
          <FormGroup check>
            <Label style={{ marginTop: '20px' }} check>
              <Input type='checkbox' name='remember' />
              Remember me
            </Label>
          </FormGroup>
          <Button
            type='submit'
            value='submit'
            color='primary'
            style={{
              marginLeft: '170px', //top right bottom left
              textAlign: 'center',
              background: 'orange',
              color: 'white',
              width: '130px',
              height: '50px',
              borderRadius: '20px',
            }}
          >
            Đăng Nhập
          </Button>
        </Form>
        <Row>
          <Col onClick={handleRegister}>
            <a style={{ textDecoration: 'none' }} href='#'>
              Chưa có tài khoản?
            </a>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            {' '}
            <a style={{ textDecoration: 'none' }} href='#'>
              Quên mật khẩu?
            </a>
          </Col>
        </Row>
      </ModalBody>
      {/* THIRD-PARTY */}
      <Row>
        <Col xs='4' style={{ textAlign: 'center' }}>
          <Button
            style={{
              width: '4em',
              height: '4em',
              borderRadius: '50%',
              backgroundColor: '#40a9ff',
            }}
          >
            <img style={{ height: '2.5em', width: '2.5em' }} src='icons/Google.png' />
          </Button>
        </Col>
        <Col xs='4' style={{ textAlign: 'center' }}>
          <Button
            style={{
              width: '4em',
              height: '4em',
              borderRadius: '50%',
              backgroundColor: '#40a9ff',
            }}
          >
            <img style={{ height: '3em', width: '3em' }} src='icons/Facebook.png' />
          </Button>
        </Col>
        <Col xs='4' style={{ textAlign: 'center' }}>
          <Button
            style={{
              width: '4em',
              height: '4em',
              borderRadius: '50%',
              backgroundColor: '#40a9ff',
            }}
          >
            <img style={{ height: '3em', width: '3em' }} src='icons/Apple.png' />
          </Button>
        </Col>
      </Row>
      <ModalFooter style={{ marginTop: '20px' }}></ModalFooter>
    </>
  )
}

export default LoginForm
