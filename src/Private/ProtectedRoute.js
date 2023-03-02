import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Pages/Home";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  // getting usesDetails
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get("/api/v1/myprofile");
        if (res?.status !== 200) {
          return <Home />;
        }
      } catch (error) {
        return <Home />;
      }
    };
    getProfile();
  }, []);

  return <Component />;
};

export default ProtectedRoute;
