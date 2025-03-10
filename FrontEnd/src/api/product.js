import axios from "axios";
import config from "../config/config";

const baseApiUrl = "https://node-20240823.vercel.app";


const getProducts = async () => {
  const response = await axios.get(`${baseApiUrl}/api/products`);


  return response;
};
const getProductsById = async (id) => {
  const response = await axios.get(`${baseApiUrl}/api/products/${id}`);


  return response;
};
export { getProducts ,getProductsById };
