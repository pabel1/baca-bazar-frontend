import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { ShippingCost, ShippingInfoContext, UserContext } from "../../context";
import { shippingFormValidation } from "../../validation/FormValidation";

const DeliverAddress = () => {
  const { shippingInfo, setShippingInfo } = useContext(ShippingInfoContext);
  const { userState, setUserState } = useContext(UserContext);
  const { shipping, setShipping } = useContext(ShippingCost);

  // const [showAddress, setShowAddress] = useState(false);
  const [state, setState] = useState({
    address: "",
    city: "",
    phone: "",
    postCode: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSetAddress = (e) => {
    e.preventDefault();
    const isValid = shippingFormValidation(state);
    if (isValid) {
      setShippingInfo({
        ...state,
        name: userState.user.name,
        email: userState.user.email,
      });
      if (state.city !== "Dhaka") {
        setShipping({ ...shipping, insideDhaka: shipping.outsideDhaka });
      }
      toast.success("Address Added");
      setState("");
    }
  };
  useEffect(() => {
    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
  }, [shippingInfo]);
  return (
    <div className=" w-full">
      <div className="flex justify-between mt-5  ">
        <h2 className="text-secondary font-semibold text-[1.2rem]">
          Delivery Address
        </h2>
      </div>
      {/* shipping address */}
      <div
        className={` w-full mx-auto rounded-xl bg-[#f7f5f3] mt-5 transition-all duration-[0.5s] block
        }`}
      >
        <form action="" className="p-[2rem]">
          <div className="flex gap-2 justify-between items-center my-6">
            <label
              className="w-20% text-[1rem] text-primaryColor font-medium"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="w-[80%] outline-none border-none px-[0.8rem] py-[0.5rem] rounded-full"
              type="text"
              name="address"
              value={state.address}
              onChange={handleInput}
              placeholder="Address"
            />
          </div>
          <div className="flex gap-2 justify-between items-center my-6">
            <label
              className="w-20% text-[1rem] text-primaryColor font-medium"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="w-[80%] outline-none border-none px-[0.8rem] py-[0.5rem] rounded-full"
              type="text"
              name="city"
              value={state.city}
              onChange={handleInput}
              placeholder="City"
            />
          </div>
          <div className="flex gap-2 justify-between items-center my-6">
            <label
              className="w-20% text-[1rem] text-primaryColor font-medium"
              htmlFor="phone"
            >
              Phone No
            </label>
            <input
              className="w-[80%] outline-none border-none px-[0.8rem] py-[0.5rem] rounded-full"
              type="text"
              name="phone"
              value={state.phone}
              onChange={handleInput}
              placeholder="Phone No"
            />
          </div>
          <div className="flex gap-2 justify-between items-center my-6">
            <label
              className="w-20% text-[1rem] text-primaryColor font-medium"
              htmlFor="postcode"
            >
              Post Code
            </label>
            <input
              className="w-[80%] outline-none border-none px-[0.8rem] py-[0.5rem] rounded-full"
              type="number"
              name="postCode"
              value={state.postCode}
              onChange={handleInput}
              placeholder="Post Code"
            />
          </div>
          <div className="flex gap-2 justify-between items-center my-6">
            <button
              className="text-[0.9rem] text-center px-[0.6rem] py-[0.4rem] bg-primaryColor text-bgColor rounded-lg transition-all duration-[0.3s]"
              type="button"
              onClick={handleSetAddress}
            >
              Set Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliverAddress;
