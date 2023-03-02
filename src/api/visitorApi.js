import axios from "axios";
import { toast } from "react-toastify";

export const setTotalVisitorAPI = async () => {
  try {
    return await axios.post("/api/v1/visitor/create", { visitor: 1 });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getTotalVisitorAPI = async () => {
  try {
    return await axios.get("/api/v1/visitor/all");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
