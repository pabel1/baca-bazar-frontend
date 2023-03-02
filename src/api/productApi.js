import axios from "axios";
import { toast } from "react-toastify";
// create single product
export const createProductAPI = async (data) => {
  try {
    return await axios.post("/api/v1/product/create/single", data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// create products using csv File
export const uploadCSVProductsAPI = async (data) => {
  try {
    return await axios.post("/api/v1/products/uploadfile", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
// get all products
export const getAllProductsAPI = async () => {
  try {
    return await axios.get(`/api/v1/product/all`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getAllProductsPaginateAPI = async (page) => {
  try {
    return await axios.get(`/api/v1/productpagination/all/${page}/${10}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
// get all subcategories
export const getAllSubCategoriesAPI = async (category) => {
  try {
    return await axios.get(`/api/v1/getsubcategory/${category}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get all subcategories
export const getAlltheSubCategoriesProductAPI = async (
  page = 1,
  limit = 10,
  category,
  subcategory,
  price
) => {
  try {
    return await axios.get(
      `/api/v1/getproductsbycategorysorting/${page}/${limit}/${category}/${subcategory}/${price}`
    );
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get single product
export const getSingleProductAPI = async (id) => {
  try {
    return await axios.get(`/api/v1/product/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
// update single product
export const updateProductAPI = async (data, id) => {
  try {
    return await axios.put(`/api/v1/product/update/${id}`, data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// delete a product
export const deleteProductAPI = async (id) => {
  try {
    return await axios.delete(`/api/v1/product/delete/${id}`);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// search products
export const getSearchProductsAPI = async (page = 1, limit = 10, search) => {
  try {
    return await axios.get(
      `/api/v1/productbysearch/${page}/${limit}/${search}`
    );
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
