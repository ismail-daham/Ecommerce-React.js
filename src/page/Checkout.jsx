import React, { useState } from "react";
import { FaAngellist, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Checkout({ setOrder }) {
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const cartPick = useSelector((state) => state.cart.cart);

  const [openBilling, setOpenBilling] = useState(true);
  const [openShipping, setOpenShipping] = useState(true);
  const [openPayment, setOpenPayment] = useState(true);
  const [payment, setPayment] = useState("");

  const [shippingInfo, setShippingInfo] = useState({
    number: 13524,
    addressInfo: "",
    cityInfo: "",
    zipCodeInfo: "",
  });


  return (
    <div>
      <div className="container mx-auto  lg:px-16 px-3 my-6">
        <h1 className="my-6 text-2xl font-semibold max-sm:text-center">
          CHECKOUT
        </h1>
        <div className="flex max-lg:flex-col justify-between max-lg:items-center  ">
          <div className="w-full">
            {/* Billing */}
            <div className="border border-white/15 p-3 mb-6 ">
              <div
                className="flex items-center justify-between "
                onClick={() => setOpenBilling(!openBilling)}
              >
                <h3 className="text-lg">Billing Information</h3>
                {openBilling ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <form
                action=""
                className={`text-black my-2 duration-500 ${
                  openBilling ? "" : "hidden"
                }`}
              >
                <label className="block text-gray-300 ">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3  py-2 border mb-5"
                />
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3  py-2 border mb-5"
                />
                <label className="block text-gray-300">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  className="w-full px-3  py-2 border mb-5"
                />
              </form>
            </div>
            {/* Shipping */}
            <div className="border border-white/15 p-3 mb-6">
              <div
                className="flex items-center justify-between "
                onClick={() => setOpenShipping(!openShipping)}
              >
                <h3 className="text-lg">Shipping Information</h3>
                {openShipping ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <form
                action=""
                className={`text-black my-2 duration-500 ${
                  openShipping ? "" : "hidden"
                }`}
              >
                <label className="block text-gray-300 ">Address</label>
                <input
                  type="text"
                  placeholder="Enter Adress"
                  className="w-full px-3  py-2 border mb-5"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      addressInfo: e.target.value,
                    })
                  }
                />
                <label className="block text-gray-300">City</label>
                <input
                  type="email"
                  placeholder="Enter City"
                  className="w-full px-3  py-2 border mb-5"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      cityInfo: e.target.value,
                    })
                  }
                />
                <label className="block text-gray-300">Zip Code</label>
                <input
                  type="tel"
                  placeholder="Enter Zip Code"
                  className="w-full px-3  py-2 border mb-5"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zipCodeInfo: e.target.value,
                    })
                  }
                />
              </form>
              
            </div>
            {/* Payment */}
            <div className="border border-white/15 p-3 mb-6">
              <div
                className="flex items-center justify-between "
                onClick={() => setOpenPayment(!openPayment)}
              >
                <h3 className="text-lg">Payment Information</h3>
                {openPayment ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <form
                action=""
                className={`  my-2 duration-500 space-y-2 py-2 ${
                  openPayment ? "" : "hidden"
                }`}
              >
                <div className="flex space-x-3 ">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "COD"}
                    onChange={() => setPayment("COD")}
                  ></input>
                  <label className="block text-gray-300 ">
                    Cash on Delivery{" "}
                  </label>
                </div>
                <div className="flex space-x-3 ">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "DC"}
                    onChange={() => setPayment("DC")}
                  />
                  <label className="block text-gray-300 ">Debit Card </label>
                </div>
                {payment === "DC" && (
                  <div className="m-1 p-3 bg-slate-700">
                    <h3 className="text-lg">Debit Card information</h3>
                    <form action="" className="text-black">
                      <label className="block text-gray-300">
                        Code Number:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter  Code Number"
                        className="w-full px-3  py-2 border mb-5"
                      />
                      <label className="block text-gray-300">
                        Code Holder Number:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter  Code Holder Number"
                        className="w-full px-3  py-2 border mb-5"
                      />
                      <div className="flex items-center space-x-5">
                        <div className="w-1/2">
                          <label className="block text-gray-300">
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            placeholder="Enter  Code Number"
                            className="w-full px-3  py-2 border mb-5"
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="block text-gray-300">CVV</label>
                          <input
                            type="text"
                            placeholder="Enter  CVV"
                            className="w-full px-3  py-2 border mb-5"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </form>
            </div>
          </div>
          {/* total and checkout */}
          <div className="space-y-4 w-[500px] max-sm:w-full shadow-lg shadow-black  p-7 md:mx-4  max-lg:my-6 bg-slate-700 rounded-sm max-h-min">
            <h1>Order Summary </h1>

            {cartPick.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center space-x-3">
                    <img src={item.image} alt="" className="w-16 h-16" />
                    <div className="">
                      <h1>{item.name}</h1>
                      <p className="text-gray-400">
                        <span className="text-green-400">${item.price}</span> x{" "}
                        {item.counter}
                      </p>
                    </div>
                  </div>
                  <h1 className="text-green-400">
                    ${item.price * item.counter}
                  </h1>
                </div>
                <hr />
              </div>
            ))}

            <div className="flex  items-center justify-between ">
              <h2>Total Price:</h2>
              <h2 className="text-green-400 text-lg">
                ${cartPrice.toFixed(2)}
              </h2>
            </div>
            <button
              className="w-full text-center bg-red-600 py-2  mt-2 rounded-sm hover:scale-105"
              onClick={() => setOrder(shippingInfo)}
            >
              <Link to="/confirmation">Place Order</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
