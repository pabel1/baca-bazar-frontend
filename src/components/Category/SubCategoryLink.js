import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const SubCategoryLink = ({ allPath, data }) => {
  return (
    <div className="my-3">
      <NavLink
        to={`${data._id === "All" ? allPath : data._id}`}
        className={`py-2 px-4 font-medium border border-transparent bg-gray-200
         hover:bg-transparent hover:text-secondary hover:border-secondary rounded-full`}
      >
        {data._id}
      </NavLink>
    </div>
  );
};

export default SubCategoryLink;
