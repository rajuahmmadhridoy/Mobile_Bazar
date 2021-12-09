import axios from 'axios';
// const api = 'https://fvaly.herokuapp.com/api';
const api2 = process.env.REACT_APP_API_BASE_URL;
const instance = axios.create({
    baseURL: api2,
    // timeout: 1000
});

const responseBody = (respons) => respons.data.data;
//   const getProduct = () => instance.get('/product')
//   .then(respons => respons.data.data)

//   const get = (url)=>{
//       return instance.get(url)
//       .then(respons => respons.data.data)
//   }
//   const post = (url,body)=>{
//       return instance.post(url)
//       .then(respons => respons.data.data)
//   }
//   const patch = (url,body)=>{
//       return instance.patch(url)
//       .then(respons => respons.data.data)
//   }
//   const _delete = (url)=>{
//       return instance.delete(url)
//       .then(respons => respons.data.data)
//   }

//   const get = (url )=> instance.get(url).then(responseBody)
//   const post = (url,body)=> instance.post(url).then(respons => respons.data.data)
//   const patch = (url,body)=> instance.patch(url).then(respons => respons.data.data)
//   const _delete = (url)=> instance.delete(url).then(respons => respons.data.data)

const request = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, body) => instance.post(url).then(responseBody),
    patch: (url, body) => instance.patch(url).then(responseBody),
    delete: (url) => instance.delete(url).then(responseBody),
};
export default request;
