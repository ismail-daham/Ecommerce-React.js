import {  FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



export default function BotCart() {

  const counter =useSelector(state=>state.cart.totalQuantity)
  



  return (
    <div>
         <Link to="/cart">
         
        <div
          className={`fixed bottom-5 right-4 z-50 cursor-pointer text-white text-4xl
       duration-500 hover:scale-105  w-14 h-14  flex items-center justify-center rounded-full animate-bounce
         ${ counter > 0 ? "bg-red-600" :"bg-slate-600" }`}
        >
          <p className="text-[22px]  absolute top-0">{counter}</p>
          <FaShoppingCart className="text-base absolute bottom-2"/>
        </div>
        </Link>
    </div>
  )
}
