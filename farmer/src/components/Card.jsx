import React from "react";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import products from "../assets/products.json"; 

export const Card = () => {
  return (
    <div className="p-5 flex flex-row flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <div key={product.id} className="relative mb-10">
          <div>
            <img
              src={`src/assets/images/BellPepper.jpeg`} 
              className="w-48 h-52 rounded-2xl object-cover brightness-90"
              alt={product.name}
            />
          </div>
          <div className="bg-[#c1c1c188] absolute top-32  left-2 rounded-2xl w-44 h-20">
            <FaLocationDot className="absolute top-1 left-1 text-red-700" />
            <h2 className="text-white text-xs absolute top-2 left-6 font-semibold">
              {product.location}
            </h2>
            <h2 className="text-white absolute top-6 left-1 font-semibold">
              {product.name}
            </h2>
            <div className="text-[#e2ff04] absolute bottom-4 left-1 font-semibold flex flex-row">
              {/* Render stars dynamically based on rating */}
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h1 className="text-white font-extrabold text-2xl absolute right-2 bottom-2">
              RS.{product.price}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};
