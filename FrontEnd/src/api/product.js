// import axios from "axios";
// import config from "../config/config";

// const baseApiUrl = "https://node-20240823.vercel.app";

// const getProducts = async () => {
//   const response = await axios.get(`${baseApiUrl}/api/products`);

//   return response;
// };
// const getProductsById = async (id) => {
//   const response = await axios.get(`${baseApiUrl}/api/products/${id}`);

//   return response;
// };
// export { getProducts ,getProductsById };
// src/api/product.js
import axios from "axios";
import Config from "../config/config"; // Adjust path based on your structure

const apiClient = axios.create({
  baseURL: Config.baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all products
export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products/");
    return response;
  } catch (error) {
    throw error;
  }
};

// Get product by ID
export const getProductsById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

// Get all electronics
export const getElectronics = async () => {
  try {
    const response = await apiClient.get("/products/electronics/");
    return response;
  } catch (error) {
    throw error;
  }
};

// Get electronic product by ID
export const getElectronicsById = async (id) => {
  try {
    const response = await apiClient.get(`/products/electronics/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};