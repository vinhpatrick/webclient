import { cilHome, cilLockLocked } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from '@coreui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../redux/action/userAction'

const AppHeaderDropdown = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }
  return (
    <div>
      <CDropdown variant='nav-item'>
        <CDropdownToggle placement='bottom-end' className='py-0' caret={false}>
          <CAvatar src='https://joeschmoe.io/api/v1/random' size='md' />
        </CDropdownToggle>
        <CDropdownMenu className='pt-0' placement='bottom-end'>
          <CDropdownItem href='/'>
            <CIcon icon={cilHome} className='me-2' />
            Quay về trang chủ
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href='/' onClick={handleLogout}>
            <CIcon icon={cilLockLocked} className='me-2' />
            Đăng xuất
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}

export default AppHeaderDropdown
