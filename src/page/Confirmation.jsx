import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Confirmation({ order }) {
  const itemOrder = useSelector((state) => state.cart);

  return (
    <div>
      <div className="container mx-auto  lg:px-16 px-3 my-6">
        <h1 className="my-6 text-2xl font-medium max-sm:text-center">
          Thank you for your order!
        </h1>
        <p >
          Your order has been placed succeccfully. You Will receive an email
          confirmatiom shortly
        </p>
        <div className=" space-y-4 bg-slate-700 p-4 rounded-md my-4 shadow-lg shadow-black">
          <div>
          <h3 className="text-lg">Order Summay</h3>
          <p>Order Number: {order.number}</p>
          </div>
          <div>
            <h2 className="text-lg">Shipping Information</h2>
            <p>{order.addressInfo}</p>
            <p>{order.cityInfo} ,{order.zipCodeInfo}</p>
            
          </div>
          <div>
            <h1 className="text-lg">Item Order</h1>
            {itemOrder.cart.map((item, index) => (
              <div
                key={index}
                className="flex  items-center justify-between  space-y-2 "
              >
                <p>
                  {item.name} {"("}
                  <span>x{item.counter}</span>
                  {")"}
                </p>
                <p className="text-green-400">
                  ${item.price * item.counter.toFixed(2)}
                </p>
              </div>
            ))}
            <hr />
            <div className="flex  items-center justify-between ">
              <h2 className="text-lg">Total Price:</h2>
              <h2 className="text-green-400 text-lg">
                ${itemOrder.totalPrice.toFixed(2)}
              </h2>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <button className="p-2 bg-green-600  hover:scale-110 duration-300 ">Trak Order</button>
          <button className="p-2 bg-red-600  hover:scale-110 duration-300 "><Link to="/">Coutinue Shopping</Link></button>
          
        </div>
      </div>
    </div>
  );
}
