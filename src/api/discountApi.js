import axios from "axios";
import { toast } from "react-toastify";

// create single product
export const createDiscountProductAPI = async (data) => {
  try {
    return await axios.post("/api/v1/discountproducts/create", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
// create single product
export const uploadCSVDiscountsAPI = async (data) => {
  try {
    return await axios.post("/api/v1/discountproducts/uploadfile", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// create single product
export const getAllDiscountsAPI = async (data) => {
  try {
    return await axios.get("/api/v1/discountproducts/all");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// create all products
export const getAllDiscountsPaginationAPI = async (currentPage) => {
  try {
    return await axios.get(`/api/v1/discountproducts/all/${currentPage}/${10}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// create single product
export const updateDiscountAPI = async (data, id) => {
  try {
    return await axios.put(`/api/v1/discountproducts/update/${id}`, data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
// create single product
export const deleteDiscountProductAPI = async ( id) => {
  try {
    return await axios.delete(`/api/v1/discountproducts/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getAllDiscountCategoriesAPI = async () => {
  try {
    return await axios.get(`/api/v1/discountproductscategory`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getAllDiscountCategoriesProductsAPI = async (
  categoryname,
  price,
  page = 1,
  limit = 10
) => {
  try {
    return await axios.get(
      `/api/v1/discountproductsbycategory/${page}/${limit}/${categoryname}/${price}`
    );
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
