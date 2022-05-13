import { changeSideBar } from '../reducer/sideBarShow'

export const _showSideBar = (show) => {
  return {
    type: 'SHOW_SIDEBAR',
    sidebarShow: show,
  }
}
