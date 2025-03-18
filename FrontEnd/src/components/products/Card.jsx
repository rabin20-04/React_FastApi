// src/components/products/Card.jsx
import { Link } from "react-router-dom";
import white4 from "../../assets/img/white4.png";
// import white4 from "../../assets/img/iphone15.png";
import white3 from "../../assets/img/white3.png";
import React from "react";

const ProductsCard = ({ id, title, name, price, image_url, category }) => {
  const productLink =
    category === "Electronics"
      ? `/products/electronics/${id}`
      : "Clothes"
      ? `/products/clothes/${id}`
      : `/products/${id}`;

  return (
    <Link
      to={productLink}
      className="block border shadow my-4 pt-2 pb-4 px-6 rounded-xl relative bg-white hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <span className="text-xs text-white bg-red-600 rounded-xl px-2 py-1 absolute top-2 right-4">
        {category}
      </span>
      <div className="py-4 flex justify-center">
        <div className="overflow-hidden bg-white w-full max-w-xs">
          <img
            src={image_url ?? white4}
            alt={name || "Product Image"}
            className="h-80 mx-auto w-auto bg-white"
          />
        </div>
      </div>
      <div className="">
        <h2 className="mt-3 pb-2 text-xl font-semibold">{name}</h2>
        <p className="">
          <span className="font-bold text-xl pe-1">
            ${Math.floor(price * 0.8)}
          </span>
          <span className="line-through text-slate-500 text-sm ">${price}</span>
        </p>
        <button className="bg-red-700 px-2 py-1 text-white rounded hover:bg-red-800 ">
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default ProductsCard;

// ---

// import white1 from "../../assets/img/white1.png";
// import React from "react";

// const ProductsCard = () => {
//   return (
//     <>
//       <div className="border shadow my-4 py-6 px-6  rounded-xl  relative bg-white">
//         {/* ProductsCard */}
//         <span  className="text-xs text-white bg-red-600 rounded-xl my-2 px-1 py-1 absolute top-0 right-4">Clothing</span>
//         <img src={white1} alt="" className="h-80 mx-auto w-auto" />
//         <h2 className="mt-3 pb-2 text-xl font-semibold">
//           Classic Varsity Jacket
//         </h2>
//         <p>
//           <span className="font-bold text-xl pe-1">$400</span>
//           <span className=" line-through text-slate-500 text-sm ">$700</span>
//         </p>
//         <button className=" bg-red-700 px-2 py-1 text-white rounded hover:bg-red-800 mt-3">
//           Buy Now
//         </button>
//       </div>

//     </>
//   );
// };

// export default ProductsCard;
// props.name is sent from the other fn which is calling this productcard function  here it is coming from list
