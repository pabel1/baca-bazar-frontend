import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllProductsAPI } from "../../api/productApi";
import ProductCard from "./ProductCard";

const ProductBySearchin = () => {
  const { state } = useLocation();
  return (
    <div className="container flex gap-x-4 flex-wrap">
      {state?.map((product, index) => (
        <ProductCard data={product} key={index} />
      ))}
    </div>
  );
};

export default ProductBySearchin;
