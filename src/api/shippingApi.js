import axios from "axios";
import { toast } from "react-toastify";

// create a campaign
export const createShippingCostAPI = async (data) => {
  try {
    return await axios.post("/api/v1/shippingcost/create", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
//get all shipping const
export const getAllShippingCostAPI = async (data) => {
  try {
    return await axios.get("/api/v1/shippingcost/getall", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

//update  a shipping cost
export const updateShippingCostAPI = async (id, data) => {
  try {
    return await axios.put(`/api/v1/shippingcost/update/${id}`, data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

//update  a shipping cost
export const deleteShippingAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/shippingcost/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
