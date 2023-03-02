import React, { useEffect, useState } from "react";
import { BsImage } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateCouponAPI } from "../../../api/couponApi";
import { couponVlidateForm } from "../../../validation/FormValidation";

const UpdateCoupon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    code: "",
    discountPercent: "",
    discountType: "",
    validationDate: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setState({ ...location.state });
  }, []);
  const handleUpdate = async () => {
    const isOk = couponVlidateForm(state);
    if (isOk) {
      const res = await updateCouponAPI(location.state._id, state); // api call
      if (res && res.status === 200) {
        toast.success(res.data.message);
        navigate("/admin");
      }
      setState({
        name: "",
        code: "",
        discountPercent: "",
        discountType: "%",
        validationDate: "",
      });
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-secondary text-[1.2rem] font-semibold">
        Update Coupon
      </h2>
      <div className="w-full flex flex-col justify-center items-start gap-6">
        <div className="w-full flex justify-between items-center gap-x-4">
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Cupon Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={state.name}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Cupon Validation Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              name="validationDate"
              onChange={handleInput}
              value={state.validationDate}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-x-4">
          <div className="w-[50%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Coupon Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="code"
              onChange={handleInput}
              value={state.code}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>

          <div className="w-[40%]">
            <label className="text-[1rem] font-medium" htmlFor="">
              Coupon Discount <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="discountPercent"
              onChange={handleInput}
              value={state.discountPercent}
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
            />
          </div>
          <div className="pt-6">
            <select
              className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
              name="discountType"
              value={state.discountType}
              onChange={handleInput}
            >
              <option value={"%"}>%</option>
              <option value={"Tk"}>Tk</option>
            </select>
          </div>
        </div>

        <div className="w-full flex gap-x-4 items-center">
          <button
            onClick={handleUpdate}
            className="flex items-center text-secondary px-[0.8rem] py-[0.5rem] border border-secondary rounded-xl transition-all duration-[0.3s] hover:text-white hover:bg-secondary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoupon;
