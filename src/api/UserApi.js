import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL

export function handleLoginApi(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/login`, {
        email: email,
        password: password
      })
      .then(res => {
        if( res.status >= 200 && res.status < 300 ) {
          resolve(res.data)
        } else {
          reject (res.response)
        }
      })
      .catch(error => {
        reject(error);
      })
  })
}

export function handleRegister(user) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/register`, user)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        } else {
          reject(res.response)
        }
      })
      .catch(reject)
  })
}

export function handleEditUserProfile(user) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${apiUrl}/edit`, user)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        } else {
          reject(res.response)
        }
      })
      .catch(reject)
  })
}
