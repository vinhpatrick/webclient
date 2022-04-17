import React from 'react'
import { removeToken } from '../../../services/makeApiRequest'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilHome, cilLockLocked } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {
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
          <CDropdownItem href='/' onClick={removeToken}>
            <CIcon icon={cilLockLocked} className='me-2' />
            Đăng xuất
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}

export default AppHeaderDropdown
