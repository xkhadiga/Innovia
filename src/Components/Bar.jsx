import React from "react";
import {
  IoMenu,
  IoHome,
  IoSearchSharp,
  IoCart,
  IoHeart,
  IoSettings,
} from "react-icons/io5";
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { MdOutlineGridView } from "react-icons/md";

import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { BarContext } from "../Context/BarContext";
import { LoginContext } from "./../Context/LoginContext";
import { RegisterContext } from "./../Context/RegisterContext";
import { ThemeContext } from "./../Context/ThemeContext";
import Register from "./Register";
import Login from "./Login";
import Avatar from "react-avatar-edit";
import { PiSunBold } from "react-icons/pi";
import { IoMoon } from "react-icons/io5";

function Bar() {
  const {
    settingsToggle,
    setSettingsToggle,
    handle_settings,
    savedImage,
    setSavedImage,
  } = useContext(BarContext);

  const navigate = useNavigate();
  const cart_items = useSelector((state) => state.cart.items);
  //  handle theme
  const { handle_theme, theme } = useContext(ThemeContext);
  // handle login
  const { login, setLogin, handle_login } = useContext(LoginContext);
  // handle register
  const { register, setRegister, handle_register } =
    useContext(RegisterContext);
//   handle avatar 
const {  avatar, setAvatar, handle_avatar,preview, setPreview,msrc, setMsrc, onClose,onCrop,handle_save,handle_delete_avatar } = useContext(BarContext);


  return (
    <div className="relative w-full  flex h-[10vh]">
      {/* Setttings Menu Toggler */}
      {settingsToggle && (
        <div
          onClick={() => setSettingsToggle(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="settings-menu  w-50 p-4  rounded-lg drop-shadow-2xl backdrop-blur-sm mx-auto flex flex-col gap-4 text-sm"
          >
            <button
              onClick={() => handle_register()}
              className="w-full p-2 flex items-center justify-center"
            >
              Register
            </button>
            <button
              onClick={handle_login}
              className="w-full p-2 flex items-center justify-center"
            >
              Login
            </button>
            <button
              className="w-full p-2 flex items-center justify-center gap-3 "
              onClick={() => handle_theme()}
            >
              Change Theme
                                          {theme ? (
                                            <span className="sidebar-moon">
                                              <IoMoon />
                                            </span>
                                          ) : (
                                            <span className="sidebar-sun ">
                                              <PiSunBold />
                                            </span>
                                          )}
            </button>
            <button 
             className="w-full p-2 flex items-center justify-center "
            onClick={() => handle_avatar()}>
              Change Profile Picture
            </button>
          </div>
        </div>
      )}
            {/*  Profile Picture*************** */}
            {avatar && (
        <div
          onClick={() => setAvatar(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" bg-[rgb(255,255,255,.4)] w-full p-6 rounded-lg drop-shadow-2xl backdrop-blur-sm mx-auto flex items-center justify-center flex-col gap-4"
          >
            <h2>Avatar Editor</h2>
            <Avatar
              width={200}
              height={200}
              onCrop={onCrop}
              onClose={onClose}
              src={msrc}
            />
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handle_delete_avatar()}
                className="bg-red-700 hover:bg-red-800 text-white shadow-sm shadow-[#6e6868]  p-2 rounded-sm px-4"
              >
                Delete Current Picture
              </button>
              <button
                onClick={() => handle_save()}
                className="card-btn p-2 rounded-full px-4"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <nav className="bar-sm flex items-center justify-around fixed w-full bottom-0 bg-black h-[10vh]">
        {/* Favorites */}
        <Link to="section1" smooth={true} duration={500}>
        <button onClick={() => navigate("/favorites")} className="bar-btn">
          <IoHeart />
        </button>
        </Link>
        {/* Cart */}
        <Link to="section1" smooth={true} duration={500}>
        <button
          onClick={() => navigate("/cart-items")}
          className="bar-btn relative"
        >
          <IoCart />
          {cart_items.length >= 1 ? (
            <span className="bg-amber-400 flex w-4 h-4  text-sm items-center justify-center  rounded-full absolute -top-[10px] -right-1 text-black">
              {cart_items.length}
            </span>
          ) : (
            <span></span>
          )}
        </button>
        </Link>

        {/* Home */}
        <Link to="section1" smooth={true} duration={500}>
          <button onClick={() => navigate("/")} className="bar-btn home">
            <IoHome />
          </button>
        </Link>
        {/* Categories */}
        <button className="bar-btn">
          <MdOutlineGridView />
        </button>
        {/* Account */}
        <button onClick={() => handle_settings()} className="bar-btn">
                   {savedImage ? (
                     <div className=" w-8 h-8 rounded-full">
                       <img src={savedImage} alt="avatar" />
                     </div>
                   ) : (
                     <span>
                       <FaCircleUser />
                     </span>
                   )}
        </button>
      </nav>
      {/* Login and Register Menu ************* */}
      {login && (
        <div
          onClick={() => setLogin(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex  justify-center  "
        >
          <div
            className="my-3 w-[90%] sm:w-[60%] lg:w-[30%] "
            onClick={(e) => e.stopPropagation()}
          >
            <Login />
          </div>
        </div>
      )}
      {register && (
        <div
          onClick={() => setRegister(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex justify-center overflow-y-auto "
        >
          <div
            className="h-full my-5 w-[85%] sm:w-[50%] lg:w-[25%] "
            onClick={(e) => e.stopPropagation()}
          >
            <Register />
          </div>
        </div>
      )}
    </div>
  );
}

export default Bar;
