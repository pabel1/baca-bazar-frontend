import axios from "axios";
import { toast } from "react-toastify";

// create a campaign
export const createCounponAPI = async (data) => {
  try {
    return await axios.post("/api/v1/cuponcode/create", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// create a campaign
export const getAllCouponsAPI = async () => {
  try {
    return await axios.get("/api/v1/cuponcode/getall");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// update a campaign
export const updateCouponAPI = async (id, data) => {
  try {
    return await axios.put(`/api/v1/cuponcode/update/${id}`, data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
// update a campaign
export const deleteCouponAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/cuponcode/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// find a coupon
export const checkCouponAPI = async (cupon) => {
  try {
    return await axios.get(`/api/v1/cuponcode/get/${cupon}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
