import React, { useEffect, useState } from "react";
import { BsImage } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { updateDiscountAPI } from "../../../api/discountApi";
import product_placeholder from "../../../assets/images/product_placeholder.png";
import { discountProductFormValidate } from "../../../validation/FormValidation";

const UpdateDiscountProduct = () => {
  const location = useLocation();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [state, setState] = useState({
    productId: "",
    price: "",
    productname: "",
    description: "",
    brand: "",
    stock: "",
    discountInPercent: "",
    image: product_placeholder,
    category: "",
    subcategory: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  // Converting normal file to base64string
  const convertToBase64 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setState({ ...state, image: reader.result });
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    }
  };
  convertToBase64(file);

  const handleUpdateDiscount = async () => {
    const isOk = discountProductFormValidate(state);
    if (isOk) {
      const res = await updateDiscountAPI(state, location.state._id); // api call
      if (res && res.status === 200) {
        toast.success(res.data.message);
      }
      setState({
        productId: "",
        price: "",
        productname: "",
        description: "",
        brand: "",
        stock: "",
        discountInPercent: "",
        image: product_placeholder,
        category: "",
        subcategory: "",
      });
    }
  };

  //  set productdata to form
  useEffect(() => {
    setState({ ...location.state });
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-secondary text-[1.2rem] font-semibold">
        Update Discount Product
      </h2>
      <div className="w-full flex flex-col justify-center items-start gap-6">
        <div className="w-full flex justify-between gap-x-4">
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Product Id <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="productId"
              onChange={handleInput}
              value={state.productId}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Product Price <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="price"
              onChange={handleInput}
              value={state.price}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
        </div>
        <div className="w-full flex justify-between gap-x-4">
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Product Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="productname"
              onChange={handleInput}
              value={state.productname}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Product Brand <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="brand"
              onChange={handleInput}
              value={state.brand}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
        </div>
        <div className="w-full flex justify-between gap-x-4">
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Product Category <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="category"
              onChange={handleInput}
              value={state.category}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Product SubCategory <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="subcategory"
              onChange={handleInput}
              value={state.subcategory}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-[1rem] font-medium" htmlFor="">
            Product Discount Percent <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="discountInPercent"
            onChange={handleInput}
            value={state.discountInPercent}
            className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
          />
        </div>
        <div className="w-full">
          <label className="text-[1rem] font-medium" htmlFor="">
            Product Stock <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="stock"
            onChange={handleInput}
            value={state.stock}
            className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
          />
        </div>
        <div className="w-full flex justify-between gap-x-4">
          <div className="w-[60%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Product Description
            </label>
            <textarea
              rows={7}
              name="description"
              onChange={handleInput}
              value={state.description}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            ></textarea>
          </div>
          <div className="w-[40%] h-52 flex flex-col">
            <div className="w-full h-[80%]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={state.image}
                alt="Product"
              />
            </div>
            <div className="w-full h-[20%]">
              <label
                htmlFor="image"
                className="w-full h-full flex justify-center items-center outline-none px-[0.8rem] py-[0.5rem] gap-x-4 rounded-xl border border-secondary"
              >
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleFile}
                  className="hidden"
                  placeholder="Product Image"
                />
                {fileName}
                <BsImage size={20} className="text-secondary" />
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={handleUpdateDiscount}
          className="flex items-center text-secondary px-[0.8rem] py-[0.5rem] border border-secondary rounded-xl transition-all duration-[0.3s] hover:text-white hover:bg-secondary"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateDiscountProduct;
