import React, { useState, useEffect } from "react";
import { products } from "../constants";
import { useLocation } from "react-router-dom";
import { star } from "../assets/icons";
import Button from "../components/Button";
import Nav from "../components/Nav";

const PopularProductDetail = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation(); // Hook to get the current URL

  useEffect(() => {
    // Get the product based on the current pathname
    const productId = location.pathname.split("/")[2]; // Assuming the URL structure is '/product/{id}'
    const foundProduct = products.find((pro) => pro.id === productId);
    setProduct(foundProduct);
  }, [location.pathname]); // Runs when the pathname changes

  // If the product isn't found yet
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className=" h-screen w-full">
      <Nav></Nav>
      <div className=" max-container max-sm:my-4 flex justify-between items-center flex-row padding-x py-[16rem] max-md:py-[10rem] max-sm:py-[6rem] max-lg:flex-col-reverse  ">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-semibold font-montserrat text-coral-red">
            {product.name}
          </h2>
          <span className="text-xl font-palanquin">{product.price}</span>
          <p className="text-lg font-palanquin leading-normal text-slate-gray max-w-[60%] max-sm:max-w-full">
            {product.description}
          </p>
          <div className="mt-8 flex justify-start gap-2.5 items-center">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-m leading-normal text-slate-gray">
              {product.rating}
            </p>
          </div>
          <div>
            <Button label="Buy now"></Button>
          </div>
        </div>
        <div className="  max-xl:py-40  border-coral-red">
          {product.imgURL && (
            <img
              src={product.imgURL}
              alt={product.name}
              width={1000}
              height={800}
              className="object-contain relative z-10"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularProductDetail;
