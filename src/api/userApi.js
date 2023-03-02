import axios from "axios";
import { toast } from "react-toastify";
// signup user
export const signUpAPI = async (data) => {
  try {
    return await axios.post("/api/v1/signup", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// login user
export const loginAPI = async (data) => {
  try {
    return await axios.post("/api/v1/login", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// myprofile
export const getMyProfileAPI = async () => {
  try {
    return await axios.get("/api/v1/myprofile");
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// logout
export const logoutAPI = async () => {
  try {
    return await axios.get("/api/v1/logout");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// all users
export const getAllUsersAPI = async (currentPage) => {
  try {
    return await axios.get(`/api/v1/allusers/${currentPage}/${10}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// update user Role
export const updateRoleAPI = async (id, userRole) => {
  try {
    return await axios.put(`/api/v1//updaterole/${id}`, { userRole });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// delete a user
export const deleteUserAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/deleteuser/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// forgot password
export const sendEmailAPI = async (email) => {
  try {
    return await axios.post(`/api/v1/forgot/password`, { email });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// reset password
export const resetPasswordAPI = async (state, token) => {
  try {
    return await axios.post(`/api/v1/user/password/reset/${token}`, state);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// update profile
export const updateUserAPI = async (state) => {
  try {
    return await axios.put(`/api/v1/update/myprofile`, state);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
// update password
export const updatePasswordAPI = async (state) => {
  try {
    return await axios.put(`/api/v1/update/mypassword`, state);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
