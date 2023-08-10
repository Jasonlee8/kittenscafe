import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

export function getCart(email) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/cart/${email}`)
      .then(res => {
        if(res.status >= 200 && res.status < 300) {
          resolve(res.data)  
        } else {
          reject(res.response)
        } 
      })
      .catch(reject)
  }) 
}