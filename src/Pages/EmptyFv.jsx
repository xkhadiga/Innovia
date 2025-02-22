import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import emptyfv from "../assets/emptyfv.png";
function EmptyFv() {
  return (
    <section className=" empty-con main-section flex flex-col justify-center items-center my-10 rounded-xl p-2 mx-auto w-[95%] h-[70vh]">
      <span className="w-[70%] sm:w-[30%] flex ">
        <img src={emptyfv} alt="empty favorites" loading="lazy" />
      </span>
      <h1 className="text-2xl sm:text-4xl  text-center my-3">your Favorites is empty</h1>
      <Link
        to="/"
        className="card-btn empty-btn  py-2 px-6 rounded-full text-lg sm:text-xl m-5 cursor-pointer"
      >
        add some items
      </Link>
    </section>
  );
}

export default EmptyFv;
