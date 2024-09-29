import { useState } from "react";
import "./App.css";
import { IoMdMenu } from "react-icons/io";
import { PiFarmFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import Silder from "./components/Silder";
import { Filter } from "./components/Filter";
import { Card } from "./components/Card";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#5b9974] rounded-b-lg p-5 w-full">
        <div className="flex flex-row gap-9 text-4xl">
          <div>
            <IoMdMenu />
           
          </div>
          <div className="bg-white">
            <PiFarmFill />
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="bg-white rounded-md p-2 text-xl absolute top-5 ">
            <h1 className="flex flex-row pr-6">
              language
              <span className="absolute top-4+ right-2 ">
                <FaAngleDown />
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-row pt-5 ">
          <div className="flex flex-col">
            <div className="text-3xl text-white font-bold">Abishek</div>
            <div className="text-white text-xl flex flex-row gap-1 pt-3">
              <FaLocationDot /> Mnavadi,karur
            </div>
          </div>

          <div className="flex flex-grow max-w-3xl md:max-w-4xl lg:max-w-5xl items-center ml-4">
            <input
              type="text"
              className="w-full rounded-lg p-3 text-xl" // Reduced padding and text size
              placeholder="Search"
            />
          </div>
          <div className="flex space-x-3 ml-4 items-center">
            {" "}
            {/* Reduced space-x and adjusted alignment */}
            <div className="bg-[#ffffff86] rounded-md p-3 text-xl">
              {" "}
              {/* Reduced padding */}
              <FaShoppingCart />
            </div>
            <div className="bg-[#ffffff86] rounded-md p-3 text-xl">
              {" "}
              {/* Reduced padding */}
              <MdNotificationsActive />
            </div>
          </div>
        </div>
      </div>
      <Silder />
      <Filter />
      <Card />
    </>
  );
}

export default App;
