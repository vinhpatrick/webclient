import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler, CImage, CNavItem, CNavLink
} from '@coreui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { _showSideBar } from '../../redux/action/sidebarShow'
import logos from '../assets/brand/logos.png'
import { AppHeaderDropdown } from './header/index'
import { AppBreadcrumb } from './index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow.sidebarShow)
  const [show, setShow] = useState(sidebarShow)
  const handleShow = () => {
    dispatch(_showSideBar(!show))
    setShow(!show)
    console.log('show', sidebarShow)
  }
  return (
    <CHeader position='sticky' className='mb-4'>
      <CContainer fluid>
        <CHeaderToggler className='ps-1' onClick={handleShow}>
          <CIcon icon={cilMenu} size='lg' />
        </CHeaderToggler>
        <CHeaderBrand className='mx-auto d-md-none' to='/'>
          <CImage rounded src={logos} />
        </CHeaderBrand>
        <CHeaderNav className='d-none d-md-flex me-auto'></CHeaderNav>

        <CHeaderNav className='d-none d-md-flex me-auto'>
          <CNavItem>
            <CNavLink to='/seller' component={NavLink} activeclassname='active'>
              <CImage rounded src={logos} />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <CNavItem>
            <CNavLink href='#'>
              <CIcon icon={cilBell} size='lg' />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href='#'>
              <CIcon icon={cilList} size='lg' />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href='#'>
              <CIcon icon={cilEnvelopeOpen} size='lg' />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className='ms-3'>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
