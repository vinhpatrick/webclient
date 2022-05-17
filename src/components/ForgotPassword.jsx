import React from 'react'
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
import { _changeLogForm } from '../redux/action/changeFormAction'
import { useDispatch } from 'react-redux'

const ForgotPassword = (props) => {
  const dispatch = useDispatch()
  const toggle = props.isToggle
  const handleLogin = () => {
    dispatch(_changeLogForm('login'))
  }
  const handleRegister = () => {
    dispatch(_changeLogForm('register'))
  }
  return (
    <div>
      <ModalHeader toggle={toggle}>Lấy lại mật khẩu</ModalHeader>
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
              placeholder='Vui lòng nhập tên đăng nhập của bạn'
            />
          </FormGroup>
          <Button
            type='submit'
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
            Lấy lại mật khẩu
          </Button>
        </Form>
        <Row style={{ marginTop: '40px', marginBottom: '30px' }}>
          <Col style={{ fontWeight: 'bold' }} className='hover-log' onClick={handleLogin}>
            Đã có tài khoản?
          </Col>
          <Col
            className='hover-log'
            style={{ textAlign: 'right', fontWeight: 'bold' }}
            onClick={handleRegister}
          >
            {' '}
            Đăng ký?
          </Col>
        </Row>
      </ModalBody>
    </div>
  )
}
export default ForgotPassword
