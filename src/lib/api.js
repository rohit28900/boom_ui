import axios from "axios";

const API_BASE_URL = "https://web-production-71f8b.up.railway.app";

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
    console.error("GET ERROR:", {
      url,
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    throw error; // ✅ THIS IS THE FIX
  }
};

// Generic POST
export const post = async (url, data, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("POST ERROR:", error.response?.data || error.message);
    throw error;
  }
};

// Generic PUT
export const put = async (url, data, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    console.error("PUT ERROR:", error.response?.data || error.message);
    throw error;
  }
};

// Generic DELETE
export const remove = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    console.error("DELETE ERROR:", error.response?.data || error.message);
    throw error;
  }
};

export default api;
