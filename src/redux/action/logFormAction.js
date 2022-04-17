export const _showLogForm = () => {
  return (dispatch) =>
    dispatch({
      type: 'SHOW_LOG_FORM',
    })
}

export const _hideLogForm = () => {
  return (dispatch) =>
    dispatch({
      type: 'HIDE_LOG_FORM',
    })
}

export const _changeLogForm = (mode) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_FORM',
      payload: { mode },
    })
  }
}
