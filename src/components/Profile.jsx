import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import { changeInfomation, changePassword } from '../api/userApi'
import { _hideLogForm } from '../redux/action/changeFormAction'
import { logoutUser } from '../redux/action/userAction'

const Profile = (props) => {
  const dispatch = useDispatch()
  // const userInfo = useSelector((state) => state.logForm.userInfo)
  const userInfo = localStorage.getItem('info') && localStorage.getItem('info')
  const infoToObj = JSON.parse(userInfo)
  const user = useSelector((state) => state.logForm.user)
  const { firstname, lastname, username, email, address, phoneNumber } = infoToObj
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
          setInfoSuggest({ ...infoSuggest, phoneNumber: 'S??? ??i???n tho???i sai!' })
        }
        setChangingInfo(false)
      } else {
        await changeInfomation({ firstname, lastname, phoneNumber, email, address })
          .then((response) => {
            // const { firstname, lastname, phoneNumber, email, address } = response.data
            // setInfoPayload({ firstname, lastname, phoneNumber, email, address })
            toast.success('B???n ???? thay ?????i th??ng tin c?? nh??n th??nh c??ng.', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            localStorage.setItem('info', JSON.stringify(response.data))
            setChangingInfo(false)
            // setTimeout(() => {
            //   window.location.reload()
            // }, 1000)
          })
          .catch((err) => {
            if (err.state >= 500) {
              toast.error('L???i h??? th???ng vui l??ng th??? l???i sau.', {
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
          rePassword: 'M???t kh???u kh??ng kh???p!',
        })
        console.log(passwordSuggest)
        setChangingPassword(false)
      } else if (!validatePassword(newPassword)) {
        setPasswordSuggest({
          ...passwordSuggest,
          newPassword: 'M???t kh???u c???n ??t nh???t 8 k?? t???!',
          rePassword: 'M???t kh???u c???n ??t nh???t 8 k?? t???!',
        })
        console.log(passwordSuggest)

        setChangingPassword(false)
      } else if (newPassword === oldPassword) {
        setPasswordSuggest({
          ...passwordSuggest,
          newPassword: 'M???t kh???u m???i ph???i kh??c m???t kh???u c??!',
          rePassword: 'M???t kh???u m???i ph???i kh??c m???t kh???u c??!',
        })
        console.log(passwordSuggest)

        setChangingPassword(false)
      } else {
        changePassword({ oldPassword, newPassword })
          .then((response) => {
            toast.success('B???n ???? thay ?????i m???t kh???u th??nh c??ng.', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            dispatch(_hideLogForm())
            setTimeout(() => {
              setChangingPassword(false)
              dispatch(logoutUser())
            }, 1000)
          })
          .catch((error) => {
            toast.error('M???t kh???u c?? kh??ng ch??nh x??c!', {
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
                  Th??ng tin c?? b???n
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab == '2' ? 'active' : ''}
                  onClick={() => setActiveTab('2')}
                >
                  ?????i m???t kh???u
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
                            T??n
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
                            H??? v?? ?????n
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
                            S??? ??i???n tho???i
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
                            ?????a ch???
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
                        ?????i th??ng tin
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
                            M???t kh???u c??
                          </Label>
                        </Col>
                        <Col xs='8'>
                          <Input
                            type='password'
                            id='oldPassword'
                            name='oldPassword'
                            placeholder='M???t kh???u c??...'
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
                            M???t Kh???u m???i
                          </Label>
                        </Col>
                        <Col xs='8'>
                          <Input
                            type='password'
                            id='newPassword'
                            name='newPassword'
                            placeholder='M???t kh???u m???i...'
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
                            Nh???p l???i
                          </Label>
                        </Col>
                        <Col xs='8'>
                          <Input
                            type='password'
                            id='rePassword'
                            name='rePassword'
                            placeholder='Nh???p l???i m???t kh???u m???i...'
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
                        ?????i m???t kh???u
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
