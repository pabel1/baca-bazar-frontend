import axios from "axios";
import { toast } from "react-toastify";

// create a client
export const createClientAPI = async (data) => {
  try {
    return await axios.post("/api/v1/clientsays/create", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// gets all client
export const getAllClientsAPI = async () => {
  try {
    return await axios.get("/api/v1/clientsays/all");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

//delete a client
export const deleteClientAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/clientsays/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
//delete a client
export const updateClientAPI = async (data,id) => {
  try {
    return await axios.put(`/api/v1/clientsays/update/${id}`,data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
