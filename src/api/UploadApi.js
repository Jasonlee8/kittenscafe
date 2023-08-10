import axios from 'axios';
import imageCompression from 'browser-image-compression';

const apiUrl = process.env.REACT_APP_API_URL

export function upload(newData) {
  console.log(newData)
  return new Promise((resolve, reject) => {
    axios
      .put(`${apiUrl}/upload`, newData)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data)
          console.log(newData.email, newData.fileName, response.data.key)
          uploadToDB(newData.email, newData.filename, response.data.key)
        } else {
          reject(response.response);
        }
      })
      .catch(reject);
  });
}

export function uploadToDB(email, filename, avatarUrl) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/fileurltodb`, {
        email: email,
        filename: filename,
        avatar: avatarUrl
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data);
        } else {
          reject(response.response);
        }
      })
      .catch(reject);
  });
}

export function deleteFile(fileurl, fileName) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${apiUrl}/upload/${fileurl}`,{
        data: {
          filename : fileName,
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data);
          window.location.reload();
        } else {
          reject(response.response);
        }
      })
      .catch(reject);
  });
}

export async function encodeImageFileAsURL(files) {
  const imageFile = files[0];
 const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true
   }
   const compressedFile = await imageCompression(imageFile, options);
   const base64 = await imageCompression.getDataUrlFromFile(compressedFile);
   return base64;
};

export function getAvatars(email) {
  return new Promise((resolve, reject) => {
      axios
        .get(`${apiUrl}/avatar`, {
          params: {email}     //get method should not have a body, 
        })                  //use params at frontend and req.query in the backend  
      .then(response => {
        console.log(response.data)
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data);
        } else {
          reject(response.response);
        }
      })
      .catch(reject);
  });
}