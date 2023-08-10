import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export function getOrderItem(coffeeId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/order/${coffeeId}`)
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

export function submitOrder(id, order) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/order/${id}`, order)
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

export function orderIdGenerater() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/maxorderid`)
      .then(res => {
        if(res.status >= 200 && res.status < 300) {
          resolve(res.data)
        } 
      })
      .catch(reject)
  })
}

export function pickUpOrder(order) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${apiUrl}/pickuporder`, order)
      .then(res => {
        if (res.status >= 200 & res.status <300) {
          resolve(res.data)
        } else {
          reject(res.response)
        }
      })
      .catch(reject)
  })
}
  