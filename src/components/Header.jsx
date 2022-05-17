import React, { useEffect, useState, memo } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPassword from './ForgotPassword'
import { logoutUser } from '../redux/action/userAction'
import { Link, useNavigate } from 'react-router-dom'
import { _search } from '../redux/action/searchAction'
import { Spin } from 'antd'
import { _getMyCart } from '../redux/action/cartAction'
import { resetLogin } from '../redux/action/userAction'
import styles from '../css_modules/css/all.module.css'
// import Carts from '../components/Carts'
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
  Button,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { _showLogForm, _hideLogForm } from '../redux/action/changeFormAction'

const Header = () => {
  useEffect(() => {
    if (auth) dispatch(_getMyCart())
  }, [])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const user = useSelector((state) => state.logForm.user)
  const [keyword, setKeyword] = useState('')
  const { sort, limit } = useSelector((state) => state.search)
  const handleSearchClick = (e) => {
    e.preventDefault()
    navigate(`/search/?keyword=${keyword.trim()}`)
    dispatch(_search(keyword.trim(), 1, limit, sort))
  }
  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick(e)
    }
  }

  const [toggleNav, setToggleNav] = useState(false)
  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }
  const handleLogout = () => {
    dispatch(_hideLogForm())
    dispatch(logoutUser())
  }
  const handleFavorite = (e) => {
    e.preventDefault()
    if (!auth) {
      dispatch(_showLogForm())
    } else {
      navigate('/favorites')
    }
  }
  const LogModal = (props) => {
    const { isOpen, mode } = useSelector((state) => state.changeForm)
    const dispatch = useDispatch()

    const handleShowLogForm = () => {
      if (!auth) {
        dispatch(_showLogForm())
      }
    }
    const handleHideLogForm = () => {
      dispatch(_hideLogForm())
      dispatch(resetLogin())
    }
    return (
      <div>
        <div onClick={handleShowLogForm} className='log-modal'>
          <span
            style={{ marginRight: '10px', fontSize: '30px' }}
            className='fa fa-sign-in fa-2x'
          ></span>
        </div>
        <Modal
          modalTransition={{
            timeout: 700,
          }}
          fade={false}
          isOpen={isOpen}
          // centered={true}
          toggle={handleHideLogForm}
        >
          {mode === 'login' ? (
            <LoginForm isToggle={handleHideLogForm} />
          ) : mode === 'register' ? (
            <RegisterForm isToggle={handleHideLogForm} />
          ) : (
            <ForgotPassword isToggle={handleHideLogForm} />
          )}
        </Modal>
      </div>
    )
  }
  const UserMenu = (props) => {
    const admin = localStorage.getItem('admin')
    // console.log(admin)
    const [menu, setMenu] = useState(false)
    const handleUserMenu = () => {
      setMenu(!menu)
    }
    return (
      <Dropdown isOpen={menu} toggle={handleUserMenu}>
        <DropdownToggle
          style={{
            // outline: 'none',
            backgroundColor: '#fed700',
            // borderRadius: '25px',
          }}
          caret
        >
          {/* <span style={{ fontWeight: 'bold' }}> {!user ? '' : user.username}</span> */}
          <span style={{ fontSize: '25px', marginTop: '2px' }} className='fa fa-user-circle'></span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/contactus'>
              <span style={{ marginRight: '10px' }} className=' fa fa-user-circle'></span>
              {!user ? '' : user.username}
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/order'>
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
  const Cart = () => {
    const { loading, data } = useSelector((state) => state.cart)
    const handleCartClick = (e) => {
      if (!auth) {
        dispatch(_showLogForm())
      } else {
        navigate('/cart')
      }
    }

    return (
      <div>
        <div className={`${styles['widget-header']} ${styles['mr-3']}`}>
          <span onClick={handleCartClick} className='hover-log fa fa-shopping-basket fa-2x'></span>
          <span
            className={`${styles['badge']} ${styles['badge-pill']} ${styles['badge-danger']} ${styles['notify']}`}
          >
            <Spin spinning={loading}>{data.length}</Spin>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar style={{ backgroundColor: '#fed700' }} expand='md' light={false} fixed='top'>
        <div className='container'>
          {/* <NavbarToggler onClick={handleToggleNav} /> */}
          <div className='toggle-menu-mobile'>
            <button
              style={{ border: '1px solid #374046' }}
              type='button'
              className='navbar-toggler'
              onClick={handleToggleNav}
            >
              <i className='fa fa-solid fa-bars'></i>
            </button>
          </div>
          <Link className='logo' to='/'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='VinhMobile' />
          </Link>
          <Collapse isOpen={toggleNav} navbar>
            <div className='header-left'>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/'>
                    {/* <span className='fa fa-home fa-sm'></span>  */}
                    Trang chủ
                  </NavLink>
                </NavItem>
                <NavItem as='li' className='hover-log' onClick={handleFavorite}>
                  <div className='nav-link'>
                    {/* <span className='fa fa-heart fa-sm'></span>  */}
                    Sản phẩm yêu thích
                  </div>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/aboutus'>
                    {/* <span className='fa fa-info fa-sm'></span>  */}
                    Thông tin shop
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/contactus'>
                    {/* <span className='fa fa-address-card fa-sm'></span> */}
                    Liên hệ
                  </NavLink>
                </NavItem>
                <NavItem className='nav-search'>
                  <div className='content-search'>
                    <form>
                      <div className='search'>
                        <input
                          type='text'
                          name=''
                          placeholder='Tìm kiếm mặt hàng,sản phẩm ...'
                          onChange={(e) => {
                            setKeyword(e.target.value)
                          }}
                          onKeyPress={handlePressEnter}
                        />
                        {keyword ? (
                          <button id='testvinhok' onClick={handleSearchClick}>
                            <i className='fa fa-search'></i>
                          </button>
                        ) : (
                          <a href='/'>
                            <button>
                              <i className='fa fa-search'></i>
                            </button>
                          </a>
                        )}
                      </div>
                    </form>
                  </div>
                </NavItem>
              </Nav>
            </div>
          </Collapse>
          <div className='header-right'>
            <div className='account'>{!auth ? <LogModal /> : <UserMenu />}</div>
            <div className='mini-cart'>
              <Cart />
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default memo(Header)
