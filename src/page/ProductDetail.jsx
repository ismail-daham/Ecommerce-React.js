import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {

  const  {id} = useParams();
  const productdata = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  const productSelected = productdata.find((item) => item.id == id);

  
  
  // useEffect(() => {
  //   setProduct(productSelected);
  // }, [id]);


  return (
    <div className="container mx-auto py-7 lg:px-16">
      <div className="flex items-center justify-center bg-slate-600 ">
        <div className="w-1/2 py-3 shadow-sm h-80">
          <img src={productSelected.image} className="h-full" />
        </div>
        <div className="flex items-center justify-center flex-col space-y-6 ">
          <h2 className="text-3xl font-semibold mb-2">{productSelected.name}</h2>
          <p className="text-green-400 font-semibold ">${productSelected.price}</p>
          <div className="flex items-center space-x-3">
            <input type="number" min={1} className="p-1 w-16 border text-black" />
            <button   className="w-full text-center  bg-red-600 p-2  mt-2 rounded-sm hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
