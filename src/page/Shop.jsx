import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { setProducts } from "../redux/productSlice";
import { mocData } from "../assets/MocData";
import BotCart from "../components/BotCart";


export default function Shop() {
  const productdata = useSelector((state) => state.product.products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setProducts(mocData));
  // });

  return (
    <div>
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  ">
        {productdata.map((item, index) => (
          <ProductCard key={index} products={item} />
        ))}
      </div>
      <BotCart/>
    </div>
  );
}
