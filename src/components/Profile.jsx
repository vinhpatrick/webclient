import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { changeInfomation, changePassword } from '../api/userApi'
import { logoutUser, receiveLogin } from '../redux/action/userAction'

import { Spin } from 'antd'
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
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.logForm.userInfo)
  const user = useSelector((state) => state.logForm.user)
  const { firstname, lastname, username, email, address, phoneNumber } = userInfo
  const isOpen = props.open
  const isToggle = props.toggle
  // State for current active Tab
  const [activeTab, setActiveTab] = useState('1')
  //handleEditProfile
  const initialInfo = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    address: '',
  }
  const [infoPayload, setInfoPayload] = useState(initialInfo)
  const [infoSuggest, setInfoSuggest] = useState(initialInfo)
  const [changingInfo, setChangingInfo] = useState(false)
  const [changedInfo, setChangedInfo] = useState(false)

  const initialPassword = {
    oldPassword: '',
    newPassword: '',
    rePassword: '',
  }
  const [passwordPayload, setPasswordPayload] = useState(initialPassword)
  const [passwordSuggest, setPasswordSuggest] = useState(initialPassword)
  const [changingPassword, setChangingPassword] = useState(false)
  useEffect(() => {
    if (username) {
      setInfoPayload({
        username,
        firstname,
        lastname,
        email,
        phoneNumber,
        address,
      })
    }
  }, [username])

  useEffect(() => {
    const changed =
      firstname !== infoPayload.firstname ||
      lastname !== infoPayload.lastname ||
      phoneNumber !== infoPayload.phoneNumber ||
      email !== infoPayload.email ||
      address !== infoPayload.address
    setChangedInfo(changed)
  }, [infoPayload])

  const infoAction = {
    handleChangeValue: (e) => {
      setInfoSuggest({ ...infoSuggest, [e.target.name]: '' })
      setInfoPayload({
        ...infoPayload,
        [e.target.name]: e.target.value || user[`${e.target.name}`],
      })
    },
    handleChangeInfo: async (e) => {
      e.preventDefault()
      setChangingInfo(true)
      const phoneNumberRegex = /^([+84|84|0]+([35789]))+([0-9]{8})$/
      const emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
      const { firstname, lastname, email, address, phoneNumber } = infoPayload
      if (!emailRegex.exec(email) || !phoneNumberRegex.exec(phoneNumber)) {
        if (!emailRegex.exec(email)) {
          setInfoSuggest({ ...infoSuggest, email: 'Email sai!' })
        }
        if (!phoneNumberRegex.exec(phoneNumber)) {
          setInfoSuggest({ ...infoSuggest, phoneNumber: 'Số điện thoại sai!' })
        }
        setChangingInfo(false)
      } else {
        await changeInfomation({ firstname, lastname, phoneNumber, email, address })
          .then((response) => {
            // const { firstname, lastname, phoneNumber, email, address } = response.data
            // setInfoPayload({ firstname, lastname, phoneNumber, email, address })
            toast.success('Bạn đã thay đổi thông tin cá nhân thành công.', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            dispatch(receiveLogin(response))
            setChangingInfo(false)
            // setTimeout(() => {
            //   window.location.reload()
            // }, 1000)
          })
          .catch((err) => {
            if (err.state >= 500) {
              toast.error('Lỗi hệ thống vui lòng thử lại sau.', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              setChangingInfo(false)
            }
          })
      }
    },
  }

  const passwordActions = {
    handleChangeValue: (e) => {
      setPasswordSuggest({ ...passwordSuggest, [e.target.name]: '' })
      setPasswordPayload({ ...passwordPayload, [e.target.name]: e.target.value.trim() })
    },
    handleChangePassword: (e) => {
      // console.log('okokok', passwordSuggest)
      e.preventDefault()
      const validatePassword = (pw) => {
        const regex = /.{8,}/
        return regex.exec(pw)
      }
      const { oldPassword, newPassword, rePassword } = passwordPayload
      setChangingPassword(true)
      if (newPassword !== rePassword) {
        setPasswordSuggest({
          ...passwordSuggest,
          rePassword: 'Mật khẩu không khớp!',
        })
        console.log(passwordSuggest)
        setChangingPassword(false)
      } else if (!validatePassword(newPassword)) {
        setPasswordSuggest({
          ...passwordSuggest,
          newPassword: 'Mật khẩu cần ít nhất 8 ký tự!',
          rePassword: 'Mật khẩu cần ít nhất 8 ký tự!',
        })
        console.log(passwordSuggest)

        setChangingPassword(false)
      } else if (newPassword === oldPassword) {
        setPasswordSuggest({
          ...passwordSuggest,
          newPassword: 'Mật khẩu mới phải khác mật khẩu cũ!',
          rePassword: 'Mật khẩu mới phải khác mật khẩu cũ!',
        })
        console.log(passwordSuggest)

        setChangingPassword(false)
      } else {
        changePassword({ oldPassword, newPassword })
          .then((response) => {
            toast.success('Bạn đã thay đổi mật khẩu thành công.', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            setTimeout(() => {
              setChangingPassword(false)
              dispatch(logoutUser())
            }, 1000)
          })
          .catch((error) => {
            toast.error('Mật khẩu cũ không chính xác!', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            setChangingPassword(false)
          })
      }
    },
  }

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
                <Spin spinning={changingInfo}>
                  <Form style={{ textAlign: 'center' }}>
                    <FormGroup>
                      <Row>
                        <Col xs='4'>
                          <Label style={{ fontWeight: 'bold' }} htmlFor='firstname'>
                            Tên
                          </Label>
                        </Col>
                        <Col xs='8'>
                          <Input
                            type='text'
                            id='firstname'
                            name='firstname'
                            placeholder={firstname}
                            onChange={infoAction.handleChangeValue}
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col xs='4'>
                          <Label style={{ fontWeight: 'bold' }} htmlFor='lastname'>
                            Họ và đện
                          </Label>
                        </Col>
                        <Col xs='8'>
                          <Input
                            type='text'
                            id='lastname'
                            name='lastname'
                            placeholder={lastname}
                            onChange={infoAction.handleChangeValue}
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
                            placeholder={phoneNumber}
                            onChange={infoAction.handleChangeValue}
                          />
                          <span style={{ color: 'red' }}>{infoSuggest.phoneNumber}</span>
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
                          <Input
                            type='text'
                            id='address'
                            name='address'
                            placeholder={address}
                            onChange={infoAction.handleChangeValue}
                          />
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
                          <Input
                            type='text'
                            id='email'
                            name='email'
                            placeholder={email}
                            onChange={infoAction.handleChangeValue}
                          />
                          <span style={{ color: 'red' }}>{infoSuggest.email}</span>
                        </Col>
                      </Row>
                    </FormGroup>
                    <Row>
                      <Button
                        onClick={infoAction.handleChangeInfo}
                        disabled={!changedInfo}
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
                </Spin>
              </TabPane>
              <TabPane tabId='2'>
                <Spin spinning={changingPassword}>
                  <Form style={{ textAlign: 'center' }}>
                    <FormGroup>
                      <Row>
                        <Col xs='4'>
                          <Label style={{ fontWeight: 'bold' }} htmlFor='oldPassword'>
                            Mật khẩu cũ
                          </Label>
                        </Col>
                        <Col xs='8'>
                          <Input
                            type='password'
                            id='oldPassword'
                            name='oldPassword'
                            placeholder='Mật khẩu cũ...'
                            onChange={passwordActions.handleChangeValue}
                          />
                          <span style={{ color: 'red' }}>{passwordSuggest.oldPassword}</span>
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
                          <Input
                            type='password'
                            id='newPassword'
                            name='newPassword'
                            placeholder='Mật khẩu mới...'
                            onChange={passwordActions.handleChangeValue}
                          />
                          <span style={{ color: 'red' }}>{passwordSuggest.newPassword}</span>
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
                          <Input
                            type='password'
                            id='rePassword'
                            name='rePassword'
                            placeholder='Nhập lại mật khẩu mới...'
                            onChange={passwordActions.handleChangeValue}
                          />
                          <span style={{ color: 'red' }}>{passwordSuggest.rePassword}</span>
                        </Col>
                      </Row>
                    </FormGroup>
                    <Row>
                      <Button
                        onClick={passwordActions.handleChangePassword}
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
                </Spin>
              </TabPane>
            </TabContent>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Profile
