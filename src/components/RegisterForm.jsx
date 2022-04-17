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

export default function RegisterForm() {
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
