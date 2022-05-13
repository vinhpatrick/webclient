const initialState = {
  sidebarShow: true,
}
const changeSideBar = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return { sidebarShow: action.sidebarShow }
    default:
      return state
  }
}
export default changeSideBar
