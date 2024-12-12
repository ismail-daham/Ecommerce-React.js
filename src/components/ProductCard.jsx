import { FaPlus, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";



export default function ProductCard({ products }) {
  const dispatch = useDispatch();

  const hendlerAddtoCart = () => {
    dispatch(addToCart(products));
  };

  return (
    <div>
      
        <div className="m-2 p-3  bg-slate-100 text-black rounded-md duration-300 hover:scale-105">
        <Link to={`/product/${products.id}`}>
        
         <img src={products.image} alt="" className="rounded-sm" />
        </Link>
          <div className="space-y-1 mt-2">
            <h3>{products.name}</h3>
            <p className="text-lg font-bold text-green-400">
              ${products.price}
            </p>
            <div className="flex flex-row  relative">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="" />
              <div
                onClick={() => hendlerAddtoCart()}
                className="  absolute right-0  bottom-1 bg-red-600  p-2 text-white rounded-full duration-500    group  "
              >
                <span className="hidden  scale-90 duration-500  group-hover:block cursor-pointer">
                  Add to Cart{" "}
                </span>
                <FaPlus className="  group-hover:hidden duration-500   " />
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}
