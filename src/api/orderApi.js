import axios from "axios";
import { toast } from "react-toastify";

// create a order
export const createOrderAPI = async (data) => {
  try {
    return await axios.post("/api/v1/order/new", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get  all order
export const getAllOrdersAPI = async () => {
  try {
    return await axios.get(`/api/v1/order/all`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get  all order
export const getAllOrdersPaginateAPI = async ( page, limit) => {
  try {
    return await axios.get(`/api/v1/order/all/${page}/${limit}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get  single order
export const getSingleOrderDetailsAPI = async (id) => {
  try {
    return await axios.get(`/api/v1/order/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get  single order
export const updateOrderStatusAPI = async (id, status) => {
  try {
    return await axios.put(`/api/v1/order/updatestatus/${id}`, { status });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// delete  single order
export const deleteOrderAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/order/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get my orders
export const getMyOrdersAPI = async () => {
  try {
    return await axios.get(`/api/v1/order/my`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
