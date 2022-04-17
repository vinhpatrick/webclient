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

const LoginForm = () => {
  return (
    <>
      <ModalHeader>Đăng Nhập</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label style={{ fontWeight: 'bold', marginBottom: '10px' }} htmlFor='username'>
              Tên đăng Nhập
            </Label>
            <Input type='text' id='username' name='username' />
          </FormGroup>
          <FormGroup>
            <Label style={{ fontWeight: 'bold', margin: '12px 0' }} htmlFor='password'>
              Mật Khẩu{' '}
            </Label>
            <Input type='password' id='password' name='password' />
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
          <Col>
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
