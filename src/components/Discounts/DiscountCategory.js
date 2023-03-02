import React, { useEffect, useState } from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import {
  getAllDiscountCategoriesAPI,
  getAllDiscountCategoriesProductsAPI,
} from "../../api/discountApi";
import SubCategoryLink from "../Category/SubCategoryLink";
import DiscountProductCard from "../Product/DiscountProductCard";
import DiscountProducts from "./DiscountProducts";

const DiscountCategory = () => {
  const [category, setCategory] = useState([]);
  const [categoriesProduct, setCategiriesProduct] = useState([]);
  const { categoryname } = useParams();
  const [price, setPrice] = useState(0);

  // geting all the categories
  useEffect(() => {
    const getAllDiscountCategories = async () => {
      const res = await getAllDiscountCategoriesAPI(); // api call
      if (res && res.status === 200) {
        setCategory([{ _id: "All" }, ...res.data.resData]);
      }
    };
    getAllDiscountCategories();
  }, []);

  useEffect(() => {
    const getAllDiscountCategoriesProducts = async () => {
      const res = await getAllDiscountCategoriesProductsAPI(
        categoryname,
        price
      ); // api call
      if (res && res.status === 200) {
        setCategiriesProduct([...res.data.resData[0].blogData]);
      }
    };
    getAllDiscountCategoriesProducts();
  }, [categoryname, price]);

  return (
    <div>
      <div className=" flex items-start justify-between">
        <div className=" flex flex-col ">
          <div className=" self-end flex items-center border-2 rounded-lg py-2 px-3">
            <RiArrowUpDownLine />
            <select
              className=" px-6 py-1 bg-transparent  text-zinc-600 outline-none"
              name="sortbyprice"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              //   onChange={perPageHandler}
            >
              <option> Sort by best match</option>
              <option value={-1}>Price: Highest First</option>
              <option value={1}>Price: Lowest First</option>
            </select>
          </div>
          <div>
            <div className=" container flex items-center gap-4 flex-wrap my-4">
              {category?.map((item, i) => (
                <SubCategoryLink allPath="/discount" data={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        {categoryname ? (
          categoriesProduct.map((item, index) => (
            <DiscountProductCard data={item} key={index} />
          ))
        ) : (
          <DiscountProducts />
        )}
      </div>
    </div>
  );
};

export default DiscountCategory;
