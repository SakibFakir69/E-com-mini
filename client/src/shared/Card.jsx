import React from "react";
import { Link } from "react-router-dom";

function Card({ title, image, price, _id }) {
  return (
    <div className="h-[200px]   flex justify-center items-center  flex-col border border-stone-200 p-1  shadow-[0px_0px_0px_0px] hover:shadow hover:border-white rounded">

      <Link to={`/product/${_id}`} className="w-full">
        <div className="flex w-full justify-center items-center ">
          <img src={image} className="h-[130px]  p-3" />
        </div>
      </Link>
      <div className="w-full flex justify-between">
        <div className="flex  justify-between items-center   ">
          <div>
            <h2>{title}</h2>
            <b className="text-[#6366F1]">${price}</b>
          </div>
        </div>
        <div className="py-6">
          <button className=" bg-[#6366F1] px-4 py-1 rounded text-white cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
