import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import mainlogo from "../images/logo-white.png";
export default function MainNav() {
  return (
    <>
      <nav>
        <div className="container flex">
          {/* all category */}
          <div
            className="relative px-8 py-4 flex: ;
        items-center cursor-pointer bg-red group "
          >
         <div className=" flex">
         <span>
              <AiOutlineBars className="mt-1"></AiOutlineBars>
            </span>
            <span className=" ml-2 uppercase">All categories</span>
         </div>
            <div className=" absolute w-full left-0 top-full bg-white   shadow-md  divide-y divide-gray divide-dashed hidden group-hover:block opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a href="" className=" hover:bg-lightGray flex items-center px-6 py-3 transition">
             <BsShopWindow></BsShopWindow>
                <span className=" ml-6 text-red text-sm">Sofa</span>
              </a>
              <a href="" className=" flex items-center px-6 py-3  hover:bg-lightGray transition">
              <BsShopWindow></BsShopWindow>
                <span className=" ml-6 text-red text-sm">Bed</span>
              </a>
              <a href="" className=" flex items-center  hover:bg-lightGray px-6 py-3 transition">
              <BsShopWindow></BsShopWindow>
                <span className=" ml-6 text-red text-sm">Table</span>
              </a>
              <a href="" className=" flex items-center  hover:bg-lightGray px-6 py-3 transition">
              <BsShopWindow></BsShopWindow>
                <span className=" ml-6 text-red  hover:bg-lightGray text-sm">Chair</span>
              </a>
            </div>
          </div>
          {/* navbar links */}

          <div className=" flex justify-between flex-grow pl-12 ">
            <div className=" flex items-center space-x-6 capitalize font-bold">
              <a className=" text-gray hover:text-blue" href="">
                Home
              </a>
              <a className=" text-gray hover:text-blue" href="">
                Shop
              </a>
              <a className=" text-gray hover:text-blue" href="">
                About us
              </a>
              <a className=" text-gray hover:text-blue" href="">
                Contact us
              </a>
            </div>
            <a className=" mt-4 text-gray hover:text-blue transition" href="">
              Login/Resister
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
