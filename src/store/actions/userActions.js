
export const handleUserValue = (res) => (
  {
    type: 'AUTH_LOGIN',
    payload: res
  }
)

export const handleLogoutValue = (value) => (
  {
    type: 'AUTH_LOGOUT', 
    value
  }
)