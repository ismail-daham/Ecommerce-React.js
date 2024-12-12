import { FaHeadset, FaShippingFast, FaTag, FaLock } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default function InfoSection() {
  const infoItem = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Get your orders delivered with noe extra cost",
    },
    {
      icon: <FaLock />,
      title: "Paymant Secure",
      description: "Your paymant information is safe with us ",
    },
    {
      icon: <FaTag />,
      title: "Discount",
      description: "Enjoy the best pricec om our product",
    },
    {
      icon: <FaHeadset />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBill1Wave />,
      title: "100% Money Back",
      description: "Full trfund if you are not satisfird ",
    },
  ];

  return (
    <div className="pb-8 ">
      <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center ">
        {infoItem.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col bg-white py-10 text-black m-4 p-2 rounded-lg  duration-300 hover:scale-105 shadow-lg shadow-black"
          >
            <i className="text-3xl text-red-500 pb-2">{item.icon}</i>
            <h3 className="my-2">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
