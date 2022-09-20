import React from "react";
import category1 from "../../images/category1.jpg";
import category2 from "../../images/category2.jpg";
import category3 from "../../images/category3.jpg";
import category4 from "../../images/category4.jpg";
import category5 from "../../images/category5.jpg";
import category6 from "../../images/category6.jpg";
export default function Category() {
  return (
    <>
      <div className=" container py-16">
        <h1 className="text-3xl font-medium text-blue mb-6">BEST SELLERS</h1>
        <div className=" grid grid-cols-3 gap-3">
          {/* single category */}
          <div className=" relative rounded-sm overflow-hidden group">
            <img src={category1} className="w-full" alt="" />
            <a
              href="#"
              className="absolute inset-0 text-white bg-black opacity-40 flex justify-center items-center text-xl font-medium group-hover:bg-opacity-60 transition"
            >
              sofa
            </a>
          </div>
          <div className=" relative rounded-sm overflow-hidden group">
            <img src={category2} className="w-full" alt="" />
            <a
              href="#"
              className="absolute inset-0 text-white bg-black opacity-40 flex justify-center items-center text-xl font-medium group-hover:bg-opacity-60 transition"
            >
              sofa
            </a>
          </div>
          <div className=" relative rounded-sm overflow-hidden group">
            <img src={category3} className="w-full" alt="" />
            <a
              href="#"
              className="absolute inset-0 text-white bg-black opacity-40 flex justify-center items-center text-xl font-medium group-hover:bg-opacity-60 transition"
            >
              sofa
            </a>
          </div>
          <div className=" relative rounded-sm overflow-hidden group">
            <img src={category4} className="w-full" alt="" />
            <a
              href="#"
              className="absolute inset-0 text-white bg-black opacity-40 flex justify-center items-center text-xl font-medium group-hover:bg-opacity-60 transition"
            >
              sofa
            </a>
          </div>
          <div className=" relative rounded-sm overflow-hidden group">
            <img src={category5} className="w-full" alt="" />
            <a
              href="#"
              className="absolute inset-0 text-white bg-black opacity-40 flex justify-center items-center text-xl font-medium group-hover:bg-opacity-60 transition"
            >
              sofa
            </a>
          </div>
          <div className=" relative rounded-sm overflow-hidden group">
            <img src={category6} className="w-full" alt="" />
            <a
              href="#"
              className="absolute inset-0 text-white bg-black opacity-40 flex justify-center items-center text-xl font-medium group-hover:bg-opacity-60 transition"
            >
              sofa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
