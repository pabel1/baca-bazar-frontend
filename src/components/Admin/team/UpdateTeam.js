import React, { useEffect, useState } from "react";
import { BsImage } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { updateTeamAPI } from "../../../api/teamApi";
import avatar_placeholder from "../../../assets/images/avatar_placeholder.png";
import { clientFormValidate } from "../../../validation/FormValidation";

const UpdateTeam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [state, setState] = useState({
    name: "",
    designation: "",
    description: "",
    image: avatar_placeholder,
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    setState({ ...location.state });
  }, []);

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

  const handleUpdate = async () => {
    const isOk = clientFormValidate(state);
    if (isOk) {
      const res = await updateTeamAPI(state, location.state._id);
      if (res && res.status === 200) {
        toast.success(res.data.message);
      }
      setState({
        name: "",
        designation: "",
        description: "",
        image: avatar_placeholder,
      });
      navigate("/admin");
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-secondary text-[1.2rem] font-semibold">
        Create Team Member
      </h2>
      <div className="w-full flex flex-col justify-center items-start gap-6">
        <div className="w-full">
          <label className="text-[1rem] font-medium" htmlFor="">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={state.name}
            className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
          />
        </div>

        <div className="w-full">
          <label className="text-[1rem] font-medium" htmlFor="">
            Designation <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="designation"
            onChange={handleInput}
            value={state.designation}
            className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
          />
        </div>
        <div className="w-full">
          <label className="text-[1rem] font-medium" htmlFor="">
            Description <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="description"
            onChange={handleInput}
            value={state.description}
            className="w-full outline-none px-[0.8rem] py-[0.5rem] rounded-xl border border-secondary"
          />
        </div>

        <div className="w-full flex justify-between gap-x-4">
          <label
            className="w-[50%] md:w-[60%] border border-secondary text-center py-1 rounded-lg"
            htmlFor="image"
          >
            Choose Avatar{" "}
            <BsImage className="inline-block ml-1 text-secondary" />
          </label>
          <input
            className="hidden"
            onChange={handleFile}
            type="file"
            name="image"
            id="image"
          />
          <div className="w-[20%]">
            <img
              className="w-12 h-w-12 rounded-full object-contain"
              src={state.image}
              alt="Team"
            />
          </div>
        </div>

        <button
          onClick={handleUpdate}
          className="flex items-center text-secondary px-[0.8rem] py-[0.5rem] border border-secondary rounded-full transition-all duration-[0.3s] hover:text-white hover:bg-secondary"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateTeam;
