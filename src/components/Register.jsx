import React from 'react'

function Register({setRegistered}) {
  return (
    <div>
    <div >
      <h2 className="my-6 text-2xl font-semibold max-sm:text-center">Sign in</h2>

      <form action="" className={`text-black my-4   duration-500 w-full `}>
      <label className="block text-gray-300 ">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="w-full px-3  py-2 border mb-5"
        />
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
        <label className="block text-gray-300">Confirm password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-3  py-2 border mb-5"
        />
        
        <button
            type="button"
            className="bg-red-600 duration-300 p-3 text-white rounded-lg w-full  "
          >
            Sign in
          </button>
      </form>
      <div className="flex items-center justify-center space-x-2">
        <span>Already Have an Account?</span>
       <span className="text-red-500 cursor-pointer  " onClick={()=>setRegistered(true)}>Login</span>
      </div>
    </div>
  </div>

  )
}

export default Register