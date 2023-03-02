import axios from "axios";
import { toast } from "react-toastify";

// create a client
export const createTeamAPI = async (data) => {
  try {
    return await axios.post("/api/v1/teammember/create", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// create a client
export const getAllTeamAPI = async (data) => {
  try {
    return await axios.get("/api/v1/teammember/all", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// update a team member
export const updateTeamAPI = async (data, id) => {
  try {
    return await axios.put(`/api/v1/teammember/update/${id}`, data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const deleteTeamAPI = async ( id) => {
  try {
    return await axios.delete(`/api/v1/teammember/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
