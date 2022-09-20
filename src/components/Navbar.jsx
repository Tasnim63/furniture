import React from "react";
import logo from "../images/logo-white.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiTwotoneHeart ,AiOutlineShoppingCart} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md";
export default function Navbar() {
  return (
    <>
      <header className=" py-4 shadow-sm bg-blue ">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img className=" w-32" src={logo} alt="" />
          </a>
          {/* scrollbar */}
          <div className=" flex w-full max-w-xl relative">
            <span className="absolute left-4 top-3 text-red">
              <BiSearchAlt2 className=" mt-2"></BiSearchAlt2> </span>
              <input
                type="text"
                className=" w-full border border-white border-r-0 pl-12 py-3 rounded-l-md focus:outline-none"
                placeholder="Search"
              />
              <button className=" bg-red text-black px-6 rounded-r-md  hover:text-sky-600 transition">
                Search
              </button>
           
          </div>

          {/* icons */}
          <div className=" flex items-center space-x-4">
            <a
              href=""
              className=" text-center text-red hover:text-white transition relative "
            >
              <div className=" text-2xl">
                <AiTwotoneHeart></AiTwotoneHeart>
              </div>
              <div className=" text-xs leading-3">Wish List</div>
              <span className=" absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red text-white text-xs ">
                8
              </span>
            </a>
            <a
              href=""
              className=" text-center text-red hover:text-white transition relative "
            >
              <div className=" text-2xl">
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
              </div>
              <div className=" text-xs leading-3">cart</div>
              <span className=" absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red text-white text-xs ">
                8
              </span>
            </a>
            <a
              href=""
              className=" text-center text-red hover:text-white transition relative "
            >
              <div className=" text-2xl">
                <MdAccountCircle></MdAccountCircle>
              </div>
              <div className=" text-xs leading-3">account</div>
             
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
