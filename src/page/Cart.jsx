import { FaTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, reduceITemCart, removeFromCart } from "../redux/cartSlice";
import imageCart from "../assets/image/pngfind.com-cart-png-2727925.png";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";

export default function Cart() {
  const cartPick = useSelector((state) => state.cart.cart);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [address, setAdress] = useState("Test Address");
  const [openModal, setOpenModal] = useState(false);

  const headlerDelete = (item) => {
    dispatch(removeFromCart(item));
  };
  const headlerAddItem = (item) => {
    dispatch(addToCart(item));
  };
  const headlerReduceItem = (item) => {
    dispatch(reduceITemCart(item));
  };

  return (
    <div>
      {cartQuantity == 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-full my-10">
          <img src={imageCart} alt="" />
          <Link to="/shop" className="my-10">

            <button
              type="button"
              className="bg-red-600 hover:scale-105 duration-300 p-3 rounded-lg"
            >
              SHOP NOW{" "}
            </button>
          </Link>
        </div>
      ) : (
        <div className="container mx-auto  lg:px-16 px-3 lg:my-6">
          <h1 className="my-6 text-2xl font-semibold max-sm:text-center">
            SHOPPING CART{" "}
          </h1>
          <div className="flex max-lg:flex-col justify-between max-lg:items-center ">
            <div className="w-full">
              <div className="flex items-center justify-between ">
                <h1>PRODUCT</h1>
                <ul className="flex items-center justify-center space-x-6  max-lg:hidden mr-1 ">
                  <li>PRICE</li>

                  <li className="">QUANTITY</li>
                  <li>SUBTOTAL</li>
                  <li>REMOVE</li>
                </ul>
              </div>
              <hr />
              {cartPick.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between lg:flex-row flex-col m-4">
                    <div className="flex items-center ">
                      <img
                        src={item.image}
                        alt=""
                        className="w-32 rounded-md"
                      />
                      <h1 className="mx-2 text-xl">{item.name}</h1>
                    </div>
                    <ul className="flex items-center justify-center max-lg:my-4 w-auto  space-x-12   ">
                      <li>${item.price}</li>
                      <li className=" flex flex-row space-x-2 text-xl border border-white/25 rounded-sm  text-center ">
                        <button onClick={() => headlerReduceItem(item)}>
                          -{" "}
                        </button>{" "}
                        <p className="border-x border-white/30  p-1 ">
                          {item.counter}{" "}
                        </p>
                        <button onClick={() => headlerAddItem(item)}>+</button>
                      </li>
                      <li>
                        {" "}
                        ${Number((item.price * item.counter).toFixed(2))}
                      </li>
                      <li
                        className="text-red-500 cursor-pointer hover:scale-110"
                        onClick={() => headlerDelete(item)}
                      >
                        <FaTrashCan />
                      </li>
                    </ul>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            {/* total and checkout */}
            <div className="space-y-4 w-[500px] max-sm:w-full max-h-min shadow-lg shadow-black  p-7 md:mx-4  max-lg:my-6 bg-slate-700 rounded-sm">
              <h1>CART TOTAL </h1>
              <div className="flex  items-center justify-between">
                <h2>TOTAL ITEMS:</h2>
                <h2 className="text-xl">{cartQuantity}</h2>
              </div>
              <hr />
              <div>
                <h2>Shipping</h2>
                <p className="ml-2">
                  {" "}
                  Shipping to <span className="text-blue-400">{address}</span>
                </p>
                <button
                  href=""
                  className="ml-2 hover:text-cyan-700"
                  onClick={() => setOpenModal(!openModal)}
                >
                  Change Address
                </button>
              </div>
              <hr />
              <div className="flex  items-center justify-between ">
                <h2>Total Price:</h2>
                <h2 className="text-green-400 text-lg">
                  ${cartPrice.toFixed(2)}
                </h2>
              </div>
              
                <button
                  className="w-full text-center bg-red-600 py-2  mt-2 rounded-sm hover:scale-105"
                  
                >
                  <Link to="/checkout">

                  Proceed to Checkout
                  </Link>
                </button>
         
            </div>
          </div>
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <ChangeAddress setOpenModal={setOpenModal} setAdress={setAdress} />
          </Modal>
        </div>
      )}
    </div>
  );
}
