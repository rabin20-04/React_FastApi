import { Link } from "react-router-dom";
import white1 from "../../assets/img/white1.png";
import React from "react";

const ProductsCard = (props) => {
  // here data comes in props we can further destructure for better reading by const ProductsCard = ({name,rand,category,etc}) => { then return etc

  return (
    <>
      <Link to={`/products/${props._id}`} className="border shadow my-4 py-6 px-6  rounded-xl  relative bg-white">
        {/* ProductsCard */}
        <span className="text-xs text-white bg-red-600 rounded-xl my-2 px-1 py-1 absolute top-0 right-4">
          Clothing
        </span>
        <img src={props.url ?? white1} alt="" className="h-80 mx-auto w-auto" />
        <h2 className="mt-3 pb-2 text-xl font-semibold">{props.name}</h2>
        <p>
          <span className="font-bold text-xl pe-1">
            ${Math.floor(props.price) * 0.8}
          </span>
          {/* just pay 80% , 20% discount  */}
          <span className=" line-through text-slate-500 text-sm ">
            ${props.price}
          </span>
        </p>
        <Link
          to={`/products/${props._id}`}
          className=" bg-red-700 px-2 py-1 text-white rounded hover:bg-red-800 mt-3"
        >
          Buy Now
        </Link>
      </Link>
    </>
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
