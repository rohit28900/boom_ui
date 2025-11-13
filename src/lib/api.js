import axios from "axios";

// Use environment variable with fallback to localhost
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const API_BASE_URL = "https://web-production-71f8b.up.railway.app"
// const API_BASE_URL = "http://localhost:8000";

// Log the API URL in development for debugging
// if (process.env.NODE_ENV === 'development') {
//   console.log('API Base URL:', API_BASE_URL);
// }

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic GET
export const get = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

// Generic POST
export const post = async (url, data, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

// Generic PUT
export const put = async (url, data, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

// Generic DELETE
export const remove = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

export default api;
