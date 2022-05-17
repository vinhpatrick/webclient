import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { _changeLogForm, _hideLogForm } from '../redux/action/changeFormAction'
import { Spin } from 'antd'
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
import { loginUser } from '../redux/action/userAction'
// import { _hideLogForm } from '../redux/action/changeFormAction'

const LoginForm = (props) => {
  const { errMess } = useSelector((state) => state.logForm)
  let err = errMess
  const [status, setStatus] = useState(err)
  const toggle = props.isToggle
  const dispatch = useDispatch()
  const initial = { username: '', password: '', invalid: '' }
  const [payload, setPayload] = useState(initial)
  const [suggest, setSuggest] = useState(initial)

  const loading = useSelector((state) => state.logForm.isLoading)
  const handleValueChange = (e) => {
    setSuggest({ ...suggest, [e.target.name]: '' })
    setPayload({ ...payload, [e.target.name]: e.target.value.trim() })
    // dispatch(_setStatus('', ''))
  }
  const handleRegister = () => {
    dispatch(_changeLogForm('register'))
  }
  const handleForgotPassword = () => {
    dispatch(_changeLogForm('forgot'))
  }
  const handleErr = () => {
    setStatus(null)
  }
  const login = (event) => {
    event.preventDefault()
    let errCount = 0
    const newSuggest = {}
    const { username, password } = payload
    if (!username) {
      newSuggest.username = 'Vui lòng nhập tên đăng nhập!'
      errCount++
    }

    if (!password) {
      newSuggest.password = 'Vui lòng nhập password!'
      errCount++
    }

    if (!errCount) {
      dispatch(loginUser({ username: payload.username, password: payload.password }))
      return
    }

    setSuggest(newSuggest)
  }

  useEffect(() => {
    if (errMess) {
      setSuggest({ invalid: errMess })
    }
  }, [errMess])

  return (
    <>
      <Spin spinning={loading}>
        <ModalHeader toggle={toggle}>Đăng Nhập</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label style={{ fontWeight: 'bold', marginBottom: '10px' }} htmlFor='username'>
                Tên đăng Nhập
              </Label>
              <Input
                type='text'
                id='username'
                name='username'
                placeholder='Vui lòng nhập tên đăng nhập'
                onFocus={handleErr}
                onChange={handleValueChange}
              />
              <span style={{ color: 'red' }}>{suggest.username}</span>
            </FormGroup>
            <FormGroup>
              <Label style={{ fontWeight: 'bold', margin: '12px 0' }} htmlFor='password'>
                Mật Khẩu{' '}
              </Label>
              <Input
                type='password'
                id='password'
                name='password'
                placeholder='Vui lòng nhập mật khẩu'
                onFocus={handleErr}
                onChange={handleValueChange}
              />
              <span style={{ color: 'red' }}>{suggest.password}</span>
              <span style={{ color: 'red' }}>{suggest.invalid}</span>
            </FormGroup>
            <FormGroup check>
              <Label style={{ marginTop: '20px', fontWeight: 'bold' }} check>
                <Input type='checkbox' name='remember' />
                Remember me
              </Label>
            </FormGroup>
            <Button
              type='submit'
              color='primary'
              onClick={login}
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
            <Col style={{ fontWeight: 'bold' }} className='hover-log' onClick={handleRegister}>
              Chưa có tài khoản?
            </Col>
            <Col
              className='hover-log'
              style={{ textAlign: 'right', fontWeight: 'bold' }}
              onClick={handleForgotPassword}
            >
              {' '}
              Quên mật khẩu?
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
                backgroundColor: '#dd4b39',
                color: 'white',
              }}
            >
              <i className='fa fa-google-plus fa-2x' aria-hidden='true'></i>
              {/* <img
                style={{ height: '2.5em', width: '2.5em' }}
                src={`${process.env.PUBLIC_URL}/icons/Google.png`}
              /> */}
            </Button>
          </Col>
          <Col xs='4' style={{ textAlign: 'center' }}>
            <Button
              style={{
                width: '4em',
                height: '4em',
                borderRadius: '50%',
                backgroundColor: '#2d4373',
                color: 'white',
              }}
            >
              <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
              {/* <img
                style={{ height: '3em', width: '3em' }}
                src={`${process.env.PUBLIC_URL}/icons/Facebook.png`}
              /> */}
            </Button>
          </Col>
          <Col xs='4' style={{ textAlign: 'center' }}>
            <Button
              style={{
                width: '4em',
                height: '4em',
                borderRadius: '50%',
                backgroundColor: '#2795E9',
                color: 'white',
              }}
            >
              <i className='fa fa-apple fa-2x' aria-hidden='true'></i>
              {/* <img
                style={{ height: '3em', width: '3em' }}
                src={`${process.env.PUBLIC_URL}/icons/Apple.png`}
              /> */}
            </Button>
          </Col>
        </Row>
        <ModalFooter style={{ marginTop: '20px' }}></ModalFooter>
      </Spin>
    </>
  )
}

export default LoginForm
