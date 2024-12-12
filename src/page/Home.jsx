import { categories, mocData } from "../assets/MocData";
import ImageShop from "../assets/image/jacek-dylag-jo8C9bt3uo8-unsplash.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import BotCart from "../components/BotCart";

export default function Home() {
  const [open, setOpen] = useState(true);

  const productdata = useSelector((state) => state.product.products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setProducts(mocData));
  // });
  

  return (
    <div className="container mx-auto    lg:px-16">
      <BotCart/>
      <div className=" flex   md:flex-row flex-col  justify-center p-4 pt-0 space-x-2  mt-8">
        <div className="w-full ">
          <button className="w-full text-start">
            <div className="bg-red-600 p-3" onClick={() => setOpen(!open)}>
              SHOP BY CATEGORIES
            </div>
          </button>

          <ul
            className={`bg-gray-200 space-y-2 p-3  text-black ${
              open ? "max-md:hidden" : "block"
            }  `}
          >
            {categories.map((item, index) => (
              <li key={index} className="flex items-center hover:underline">
                <span className="w-2 h-2 border border-red-600  rounded-lg mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className=" relative">
          <img src={ImageShop} alt="" className="w-full h-5/6 mb-0  rounded-sm" />
          <div className="absolute md:top-24 top-1 left-5 lg:space-y-9 space-y-5 md:text-start text-center">
            <p className="text-gray-700">Ismail | e-Shop</p>
            <h1 className="text-3xl font-bold  te">WELCOME TO E-SHOP</h1>
            <h3 className="text-2xl text-yellow-800">MILLION + PRODUCT</h3>
            <button
              type="button"
              className="bg-red-600 hover:scale-105 duration-300 p-3 rounded-lg"
            >
              {" "}
              SHOP NOW{" "}
            </button>
          </div>
        </div>
      </div>

      <InfoSection />
      <CategorySection />
      <h1 className="m-3 text-center font-bold text-[30px]">Top product</h1>
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  ">
        {productdata.slice(0, 5).map((item, index) => (
          <ProductCard key={index} products={item} />
        ))}
      </div>
      <h1 className="m-3 text-center font-bold text-[30px]">Shop</h1>
      <Shop/>
    </div>

  );
}
