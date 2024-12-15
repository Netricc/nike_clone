import React from "react";
import { star } from "../assets/icons";
import { useNavigate } from "react-router-dom";

const PopularProductCard = ({ imgURL, name, price, rating, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("was Clicked in the product ", id);
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="flex flex-1 flex-col  max-sm:w-full w-full cursor-pointer"
      onClick={handleCardClick}
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-m leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-2xl leading-normal font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
