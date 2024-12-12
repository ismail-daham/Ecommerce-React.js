import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container mx-auto md:px-16">
        <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" space-y-4 px-1 text-center">
            <h1 className="text-lg font-bold text-red-600 ">e-Shop</h1>
            <p>
              your one-stop shop for all your needs. with us andexperience best
              online shopping experience.
            </p>
          </div>
          <div className="text-center space-y-2 mt-2">
            <h1 className="text-lg font-bold">Quick Links</h1>
            <ul className="flex flex-col mx-auto space-y-2">
         
                <Link to="/" className="hover:text-cyan-600">
                  Home
                </Link>
        
                <Link to="/shop" className="hover:text-cyan-600">
                  Shop
                </Link>
         
                <Link to="/contact" className="hover:text-cyan-600">
                  Contact
                </Link>
        
                <Link to="/about" className="hover:text-cyan-600">
                  About
                </Link>
              
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg text-center font-bold">Follow US</h1>
            <div className="flex space-x-4 text-xl items-center justify-center   ">
              <FaFacebook className="hover:scale-125 hover:text-cyan-600" />
              <FaX className="hover:scale-125 hover:text-cyan-600" />
              <FaInstagram className="hover:scale-125 hover:text-cyan-600" />
              <FaLinkedin className="hover:scale-125 hover:text-cyan-600" />
            </div>
            <form action="" className=" flex justify-center">
              <input
                type="Email"
                placeholder="Your email"
                className="bg-slate-900 border p-1 pl-3 rounded-l-md"
              />
              <button
                type="submit"
                className="p-2 border border-white bg-red-600 rounded-r-md "
              >
                Subscrobe
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="text-center flex items-center py-2 justify-between md:px-0 px-5">
          <h4>2024 e-Shop </h4>
          <a href=""> By Ismail Daham</a>
        </div>
      </div>
    </footer>
  );
}
