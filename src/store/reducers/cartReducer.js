
const initialState = {
  cartArr: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_CART_ARRAY':
      console.log( action.payload.cartArr)
      return {
        cartArr: action.payload.cartArr
      }
    case 'USER_LOGOUT_CART_ARRAY':
      return {
        cartArr: []
      }
    default:
      return state
  }
} 

export default cartReducer