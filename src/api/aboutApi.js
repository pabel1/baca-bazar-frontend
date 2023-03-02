import axios from "axios";
import { toast } from "react-toastify";

export const createAboutAPI = async (data) => {
  try {
    return await axios.post("/api/v1/aboutus/create", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const getAllAboutsAPI = async () => {
  try {
    return await axios.get("/api/v1/aboutus/all");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const updateAboutAPI = async (data, id) => {
  try {
    return await axios.put(`/api/v1/aboutus/update/${id}`, data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const deleteAboutAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/aboutus/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
