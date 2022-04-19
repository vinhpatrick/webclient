import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { logoutUser } from '../redux/action/logFormAction'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Modal,
  Button,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const username = ''
  //  const username = useSelector((state) => state.logForm.user.username)

  console.log('authenticated', auth)
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleModal, setToggleModal] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }
  const hanldeToggleModel = () => {
    setToggleModal(!toggleModal)
  }
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <React.Fragment>
      <Navbar color='warning' expand='md' light fixed='top'>
        <div className='container'>
          <NavbarToggler onClick={handleToggleNav} />
          <Collapse isOpen={toggleNav} navbar>
            <div>
              {/* <NavbarBrand className='okok' href='/'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo3.png`}
                  height='30'
                  width='41'
                  alt='Ristorante Con Fusion'
                />
              </NavbarBrand> */}
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink className='nav-link' to='/home'>
                  <span className='fa fa-home fa-lg'></span> Trang chủ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/favorites'>
                  <span className='fa fa-heart fa-lg'></span> Wish List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/contactus'>
                  <span className='fa fa-address-card fa-lg'></span>Liên hệ
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem className='nav-search'>
                <form>
                  <div className='search'>
                    <input type='text' name='' placeholder='Nhập tên sản phẩm ...' />
                    <button>
                      <i className='fa fa-search'></i>
                    </button>
                  </div>
                </form>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem className='fix'>
                <NavLink className='nav-link' to='/cart'>
                  <span className='fa fa-shopping-cart fa-lg'></span> Cart
                </NavLink>
              </NavItem>
              <NavItem>
                {!auth ? (
                  <NavLink onClick={hanldeToggleModel} className='nav-link' to='#'>
                    <span className='fa fa-user-circle fa-lg'></span> Login
                  </NavLink>
                ) : (
                  <div>
                    <div className='navbar-text mr-3'>{username ? username : ''}</div>
                    <Button outline onClick={handleLogout}>
                      <span className='fa fa-sign-out fa-lg'></span> Logout
                      {/* {this.props.auth.isFetching ? (
                        <span className='fa fa-spinner fa-pulse fa-fw'></span>
                      ) : null} */}
                    </Button>
                  </div>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Modal isOpen={toggleModal} toggle={hanldeToggleModel}>
        <LoginForm toggle={hanldeToggleModel} />
      </Modal>
    </React.Fragment>
  )
}

export default Header
