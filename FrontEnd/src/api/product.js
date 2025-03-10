import axios from "axios";
import config from "../config/config";

const baseApiUrl = "https://node-20240823.vercel.app";


const getProducts = async () => {
  const response = await axios.get(`${baseApiUrl}/api/products`);

  // baseurl means the url of main website then add the response getting place like /api/products

  return response;
};
const getProductsById = async (id) => {
  const response = await axios.get(`${baseApiUrl}/api/products/${id}`);

  // baseurl means the url of main website then add the response getting place like /api/products

  return response;
};
export { getProducts ,getProductsById };

// -------------------------  2    try and catch error

// api paune url farak ra exact hunxa like vercelapp/api/products
// but in base api we put the url of base  then add the api getting url with
// const response = await axios.get(`${baseApiUrl}/api/products`);

// HTTP methods
// GET = Read
// POST = Create
// PUT = Update
// DELETE= Delete

// mainly we use these three methods ,
// ,also there are a lot of other methods like patch for partial update etc but we mainly use these four methods

// --- The main thing
// this response is returned as promise and it takes time to get response ie
// when we make reuqest throuth await.get(url) the response that the website returns takes time

// -------------------------  2    try and catch error

// import axios from 'axios';

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response); // Full response object
//   })
//   .catch(error => {
//     console.error(error);
//   });


// ...------------------------------
// import axios from "axios";
// import Config from "../config/config";



// const getProducts = async () => {
//   const response = await axios.get(`${Config.baseApiUrl}/api/products`);

//   // baseurl means the url of main website then add the response getting place like /api/products

//   return response;
// };
// export { getProducts };



// -------------------------  2    try and catch error 

// api paune url farak ra exact hunxa like vercelapp/api/products
// but in base api we put the url of base  then add the api getting url with
// const response = await axios.get(`${baseApiUrl}/api/products`);

// HTTP methods
// GET = Read
// POST = Create
// PUT = Update
// DELETE= Delete

// mainly we use these three methods ,
// ,also there are a lot of other methods like patch for partial update etc but we mainly use these four methods

// --- The main thing
// this response is returned as promise and it takes time to get response ie
// when we make reuqest throuth await.get(url) the response that the website returns takes time




// -------------------------  2    try and catch error 


// import axios from 'axios';

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response); // Full response object
//   })
//   .catch(error => {
//     console.error(error);
//   });
