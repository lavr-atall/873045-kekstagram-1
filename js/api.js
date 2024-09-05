import { DOWNLOAD_SERVER_URL, UPLOAD_SERVER_URL } from './const.js';

export const getData = () => fetch(DOWNLOAD_SERVER_URL)
  .then((response) => {
    if(!response.ok){
      throw new Error();
    }
    return response.json();
  });

export const sendData = (data) => fetch(UPLOAD_SERVER_URL, {
  method: 'POST',
  body: data
});
