import axios from "axios";
import { toast } from "react-toastify";

// create a campaign
export const createCampaignAPI = async (data) => {
  try {
    return await axios.post("/api/v1/campaign/create", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get all products
export const getAllCampaignsAPI = async () => {
  try {
    return await axios.get("/api/v1/campaign/all");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// update a campaign
export const updateCampaignAPI = async (data, id) => {
  try {
    return await axios.put(`/api/v1/update/${id}`, data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get all products
export const deleteCampaignsAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
