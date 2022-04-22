import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { logoutUser } from '../redux/action/loginAction'
import { Link } from 'react-router-dom'
import {} from '../api/productApi'
import axios from 'axios'
import axiosClient from '../api/axiosClient'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Modal,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { _showLogForm, _hideLogForm } from '../redux/action/changeFormAction'
import { getProduct } from '../api/productApi'
import { type } from '@testing-library/user-event/dist/type'

const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const user = useSelector((state) => state.logForm.user)
  // console.log('token', username)
  // const username = ''
  // console.log('authenticated', auth)
  const [toggleNav, setToggleNav] = useState(false)
  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }
  const handleLogout = () => {
    dispatch(logoutUser())
  }
  const LogModal = (props) => {
    const { isOpen, mode } = useSelector((state) => state.changeForm)
    const dispatch = useDispatch()
    const handleShowLogForm = () => {
      dispatch(_showLogForm())
    }
    const handleHideLogForm = () => {
      dispatch(_hideLogForm())
    }
    return (
      <div>
        <NavLink onClick={handleShowLogForm} className='nav-link' to='#'>
          <span className='fa fa-user-circle fa-lg'></span> Login
        </NavLink>
        <Modal isOpen={isOpen} toggle={handleHideLogForm}>
          {mode === 'login' ? (
            <LoginForm isToggle={handleHideLogForm} />
          ) : (
            <RegisterForm isToggle={handleHideLogForm} />
          )}
        </Modal>
      </div>
    )
  }
  const UserMenu = (props) => {
    const admin = localStorage.getItem('admin')
    console.log(admin)
    const [menu, setMenu] = useState(false)
    const handleUserMenu = () => {
      setMenu(!menu)
    }
    return (
      <Dropdown isOpen={menu} toggle={handleUserMenu}>
        <DropdownToggle
          style={{
            backgroundColor: '#FFFF66',
            borderRadius: '25px',
          }}
          caret
        >
          {!user ? '' : user.username}
          <span className='fa fa-user-circle fa-lg'></span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/contactus'>
              <span style={{ marginRight: '10px' }} className=' fa fa-user-circle'></span>
              {!user ? '' : user.username}
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/contactus'>
              <span style={{ marginRight: '10px' }} className=' fa fa-cart-arrow-down'></span>
              Đơn hàng
            </Link>
          </DropdownItem>
          {admin === 'true' ? (
            <DropdownItem>
              <Link style={{ color: 'black', textDecoration: 'none' }} to='/seller'>
                <span style={{ marginRight: '10px' }} className='fa fa-shopping-bag'></span>Kênh bán
                hàng
              </Link>
            </DropdownItem>
          ) : (
            ''
          )}
          <DropdownItem onClick={handleLogout}>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>
              <span style={{ marginRight: '10px' }} className='fa fa-sign-out'></span>
              Đăng xuất
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  return (
    <div>
      <Navbar style={{ backgroundColor: '#FFD700' }} expand='md' light>
        <div className='container'>
          <NavbarToggler onClick={handleToggleNav} />
          <Collapse isOpen={toggleNav} navbar>
            <div>
              <NavbarBrand className='okok' href='/'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo5.png`}
                  height='30'
                  width='41'
                  alt='Ristorante Con Fusion'
                />
              </NavbarBrand>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  <span className='fa fa-home fa-lg'></span> Trang chủ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/favorites'>
                  <span className='fa fa-heart fa-lg'></span> Wish List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/aboutus'>
                  <span className='fa fa-info fa-lg'></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/contactus'>
                  <span className='fa fa-address-card fa-lg'></span>Liên hệ
                </NavLink>
              </NavItem>
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
              <NavItem className=''>
                <NavLink className='nav-link' to='/cart'>
                  <span className='fa fa-shopping-cart fa-lg'></span> Giỏ hàng
                </NavLink>
              </NavItem>
              <NavItem>{!auth ? <LogModal /> : <UserMenu />}</NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Header
