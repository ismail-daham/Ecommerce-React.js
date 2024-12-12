import React, { Children } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import ChangeAddress from "./ChangeAddress";

export default function Modal({ openModal, setOpenModal ,children }) {
  

  if (openModal)
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40" >
        <div className=" shadow-black  md:mx-4    max-lg:my-6 bg-slate-700  rounded-lg shadow-lg p-6 w-full max-w-xl">
          <button
            className="absolute top-4 right-4 text-2xl rounded-sm "
            onClick={()=>setOpenModal(false)}
          >
            &times;
          </button>
          <div >
           {children }
          </div>
        </div>
      </div>
    );
}
