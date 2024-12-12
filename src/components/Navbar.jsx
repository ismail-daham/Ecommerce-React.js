import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import { useState } from "react";
import Register from "./Register";
import { setfilterItem } from "../redux/productSlice";
import imageNofound from '../assets/image/no-product.png'
import ProductCard from "./ProductCard";



export default function Navbar() {
  const counterItemInCart = useSelector((state) => state.cart.cart);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [registered, setRegistered] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const searchData = useSelector((state) => state.product.productfilter);
  const searchCounter = useSelector((state) => state.product.searchItem).length;
  
  
  




  return (
    <nav className="bg-slate-700 shadow-md ">
      <div className="container mx-auto flex  lg:px-16 flex-row  items-center justify-between p-4 ">
        <div className="text-lg font-bold text-red-600">
          <Link to="/">e-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4 max-md:my-2 ">
          <form action="">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4 text-black"
              onChange={(e) =>  dispatch(setfilterItem(e.target.value))}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4    text-center ">
          <Link to="/cart" className="flex relative max-sm:pr-4">
            <button>
              <FaShoppingCart
                className={cartQuantity > 0 ? "text-orange-500 text-lg" : ""}
              />
              <p
                className={`bg-red-600 absolute -top-4 right- rounded-full px-2 text-xs`}
              >
                {cartQuantity > 0 ? cartQuantity : ""}
              </p>
            </button>
          </Link>
          <div onClick={() => setOpenModal(!openModal)}>
            <button className="hidden md:block">Login | Register</button>
            <button className="block md:hidden   ">
              <FaUser />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 text-lg font-semibold py-3">
        <Link to="/" className=" hover:text-red-700">
          Home
        </Link>
        <Link to="/Shop" className=" hover:text-red-700">
          Shop
        </Link>
        <Link to="/test" className=" hover:text-red-700">
          Contact
        </Link>
        <Link to="/" className=" hover:text-red-700">
          About
        </Link>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {registered ? (
          <Login setRegistered={setRegistered} />
        ) : (
          <Register setRegistered={setRegistered} />
        )}
      </Modal>


      {searchCounter ===   0 ? "": searchData.length > 0 ? (
        <div className="container mx-auto    lg:px-16">
          
        <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  ">
        {searchData.map((item, index) => (
          <ProductCard key={index} products={item} />
        ))}
      </div>
        </div>)
      : (<div className="flex flex-col items-center justify-center w-full h-full my-10">
        <img src={imageNofound} alt="" />    
      </div>)
      }
    </nav>
  );
}
