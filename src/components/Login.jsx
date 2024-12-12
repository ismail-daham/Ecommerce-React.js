import React from "react";
import { Link } from "react-router-dom";

export default function Login({setRegistered}) {
  return (

      <div>
        <div >
          <h2 className="my-6 text-2xl font-semibold max-sm:text-center">Login</h2>

          <form action="" className={`text-black my-4   duration-500 w-full `}>
            <label className="block text-gray-300 ">Emali</label>
            <input
              type="Email"
              placeholder="Enter Email"
              className="w-full px-3  py-2 border mb-5"
            />
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3  py-2 border mb-5"
            />
            <div className="flex items-center justify-between mb-3">
            <label className="block text-gray-300 space-x-3">
              <input type="checkbox"  className="text-lg" />
              <span>Remember Me</span>
            </label>
            <a href="" className="text-red-400">Forgot Password?</a>
            </div>
            <button
                type="button"
                className="bg-red-600 duration-300 p-3 text-white rounded-lg w-full  "
              >
                Login
              </button>
          </form>
          <div className="flex items-center justify-center space-x-2">
            <span>Don't Have an Account?</span>
           <span className="text-red-500 cursor-pointer  " onClick={()=>setRegistered(false)}>Sign up</span>
          </div>
        </div>
      </div>

  );
}

{
  /* <form action="" className="text-black my-2 duration-500">
            <div>
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
            <label>
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="">Forgot Password?</a>
            <div>
              <button
                type="button"
                className="bg-red-600 hover:scale-105 duration-300 p-3 rounded-lg w-32"
              >
                Login
              </button>
            </div>
          </form> */
}
