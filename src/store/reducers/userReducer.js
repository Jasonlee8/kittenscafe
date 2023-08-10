const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
  telephone: 0,
  isLogin: false
}

const avatarUrl = process.env.REACT_APP_AVATAR_IMG

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        avatar: action.payload.avatar,
        telephone: action.payload.telephone,
        isLogin: true,
      }
    case 'AUTH_LOGOUT':
      return {
        ...state,
        first_name: '',
        last_name: '',
        email: '',
        avatar: avatarUrl,
        telephone: 0,
        maxOrderId: 0,
        isLogin: false
      }
    default:
      return state
  }
}

export default userReducer