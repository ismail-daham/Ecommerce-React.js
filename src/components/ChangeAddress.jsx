import React, { useState } from "react";

export default function ChangeAddress({ setOpenModal, setAdress }) {
const [newAdress,setNewAdress]=useState("")
const [messageSave,setMessageSaver]=useState(false)
 const headlerSave =()=>{
  if(newAdress.length>4){
    setAdress(newAdress),setOpenModal(false)
  }else
  {
    setMessageSaver(!messageSave)
  }
 }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter naw adderss"
        className={`border p-2 w-full mb-4 text-black rounded-sm ${messageSave? "border-red-600":""}`}
        onChange={(e) => setNewAdress(e.target.value)}
      />
      
      <div className="flex items-center justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded "
          onClick={ headlerSave}
        >
          Save Adderss
        </button>
      </div>
    </div>
  );
}
