
export const setCartItems = (res) => (
  {
    type: 'USER_LOGIN_CART_ARRAY',
    payload: res
  }
)

export const setLogoutCart = () => (
  {
    type: 'USER_LOGOUT_CART_ARRAY',
    payload: []
  }
)





