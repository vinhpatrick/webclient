import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Form,
  Button,
  Input,
} from 'reactstrap'
const Profile = (props) => {
  const userInfo = useSelector((state) => state.logForm.userInfo)
  const user = useSelector((state) => state.logForm.user)
  const { firstname, lastname, username, email, address, phoneNumber } = userInfo
  const isOpen = props.open
  const isToggle = props.toggle
  // State for current active Tab
  const [activeTab, setActiveTab] = useState('1')
  const handleEditProfile = () => {}
  return (
    <div>
      <Modal isOpen={isOpen} toggle={isToggle}>
        <ModalHeader> {!user ? '' : user.username}</ModalHeader>
        <ModalBody>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab == '1' ? 'active' : ''}
                  onClick={() => setActiveTab('1')}
                >
                  Thông tin cơ bản
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab == '2' ? 'active' : ''}
                  onClick={() => setActiveTab('2')}
                >
                  Đổi mật khẩu
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent style={{ marginTop: '20px' }} activeTab={activeTab}>
              <TabPane tabId='1'>
                <Form onSubmit={handleEditProfile} style={{ textAlign: 'center' }}>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='username'>
                          Tên
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input type='text' id='username' name='username' value={username} />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='fullname'>
                          Họ và đện
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input
                          type='text'
                          id='fullname'
                          name='fullname'
                          value={firstname + lastname}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='phoneNumber'>
                          Số điện thoại
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input
                          type='text'
                          id='phoneNumber'
                          name='phoneNumber'
                          value={phoneNumber}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='address'>
                          Địa chỉ
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input type='text' id='address' name='address' value={address} />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='email'>
                          Email
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input type='text' id='email' name='email' value={email} />
                      </Col>
                    </Row>
                  </FormGroup>
                  <Row>
                    <Button
                      type='submit'
                      color='primary'
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto', //top right bottom left
                        textAlign: 'center',
                        background: 'orange',
                        color: 'white',
                        width: '130px',
                        height: '50px',
                        borderRadius: '20px',
                      }}
                    >
                      Đổi thông tin
                    </Button>
                  </Row>
                </Form>
              </TabPane>
              <TabPane tabId='2'>
                <Form onSubmit={handleEditProfile} style={{ textAlign: 'center' }}>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='oldPassword'>
                          Mật khẩu cũ
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input type='password' id='oldPassword' name='oldPassword' />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='newPassword'>
                          Mật Khẩu mới
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input type='password' id='newPassword' name='newPassword' />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col xs='4'>
                        <Label style={{ fontWeight: 'bold' }} htmlFor='rePassword'>
                          Nhập lại
                        </Label>
                      </Col>
                      <Col xs='8'>
                        <Input type='password' id='rePassword' name='rePassword' />
                      </Col>
                    </Row>
                  </FormGroup>
                  <Row>
                    <Button
                      type='submit'
                      color='primary'
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center',
                        background: 'orange',
                        color: 'white',
                        width: '130px',
                        height: '50px',
                        borderRadius: '20px',
                      }}
                    >
                      Đổi mật khẩu
                    </Button>
                  </Row>
                </Form>
              </TabPane>
            </TabContent>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Profile
