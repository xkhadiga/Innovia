import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoSearchSharp, IoHeart } from "react-icons/io5";
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "react-avatar-edit";
import { ThemeContext } from "../Context/ThemeContext";
import Login from "./Login";
import Register from "./Register";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { RegisterContext } from "../Context/RegisterContext";
import { BarContext } from "../Context/BarContext";
import { PiSunBold } from "react-icons/pi";
import { IoMoon } from "react-icons/io5";


function Nav() {



  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const cart_items = useSelector((state) => state.cart.items);

  // open search bar (toggler)
  const handle_search = () => {
    document.getElementById("searchinp").classList.toggle("search-on");
  };
  // search on pressing enter

  const handle_nav = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${keyword}`, { state: { keyword } });
    }
  };
  // toggle account settings
  const [account, setAccount] = useState(false);
  const handle_account = () => {
    setAccount(!account);
  };

  //   handle settings toggler
  const [settings, setSettings] = useState(false);
  const handle_settings = () => {
    setSettings(!settings);
    setAccount(false);
  };
// handleAvatar
const { savedImage,setSavedImage, avatar, setAvatar, handle_avatar,preview, setPreview,msrc, setMsrc, onClose,onCrop,handle_save,handle_delete_avatar } = useContext(BarContext)

  //  handle theme
  const { handle_theme, theme } = useContext(ThemeContext);
  // handle login
const {login, setLogin, handle_login} = useContext(LoginContext);
  // handle register
  const {register, setRegister, handle_register} = useContext(RegisterContext);
  return (
    <nav className="navbar relative w-full max-w-full h-[10vh] flex items-center justify-between px-2 sm:px-10 top-0  z-50 ">
      {/* settings toggle ****************** */}
      {settings && (
        <div
          onClick={() => setSettings(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="settings-menu bg-[rgb(255,255,255,.4)]  p-6 rounded-lg drop-shadow-2xl backdrop-blur-sm mx-auto flex flex-col gap-4"
          >
            <button
              className="flex items-center justify-center gap-4 "
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
            <button onClick={() => handle_avatar()}>
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
            className=" bg-[rgb(255,255,255,.4)] w-[50%] p-6 rounded-lg drop-shadow-2xl backdrop-blur-sm mx-auto flex items-center justify-center flex-col gap-4"
          >
            <h2>Avatar Editor</h2>
            <Avatar
              width={300}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
              src={msrc}
            />
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handle_delete_avatar()}
                className="bg-red-700 hover:bg-red-800 text-white shadow-sm shadow-[#6e6868]  p-2 rounded-full px-4"
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
      {/* Logo & Name *********** */}
      <div className="smscreens flex-1 items-center justify-start ">
        <Link to="/">
          <img className=" w-7 sm:w-10 " src={logo} alt="Store logo" />
        </Link>
      </div>
      <Link
        to="/"
        className="logo flex items-center justify-start sm:justify-center flex-1 text-lg lg:text-xl mx-2 font-bold "
      >
        Innovia
      </Link>
      {/* Search - Favorites - Cart - Account *********** */}
      <div className="flex-1 items-center justify-end flex  sm:gap-3 text-lg lg:text-xl">
      {/* Search Input *********** */}
      <input
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handle_nav}
          id="searchinp"
          placeholder="Search..."
          className="nav-search w-0 bg-white  rounded-lg caret lg:text-lg"
          type="text"
        />
          <button 
           onClick={() => handle_search()}
          className="nav-search-icon hover:scale-[1.1] text-xl mx-3 sm:mx-0 sm:text-lg ">
            <IoSearchSharp />
          </button>

        <span className="smscreens divider">|</span>
        {/* Favorites link ************** */}
        <button
          onClick={() => navigate("/favorites")}
          className="smscreens  items-center justify-center gap-1"
        >
          <span >favorites</span>
          <span className="text-2xl">
            <IoHeart />
          </span>
        </button>
        <span className="divider smscreens">|</span>
        {/* Cart link **************** */}
        <button
          onClick={() => navigate("/cart-items")}
          className="smscreens items-center justify-center gap-1"
        >
          <span>cart</span>

          <span className="relative text-2xl">
            <FaCartShopping />
            {cart_items.length >= 1 ? (
              <span className="bg-amber-400 flex w-5 h-5 text-black  text-lg items-center justify-center  rounded-full absolute -top-3 -right-2">
                {cart_items.length}
              </span>
            ) : (
              <span></span>
            )}
          </span>
        </button>
        <span className="divider smscreens">|</span>
        {/* account menu toggler button ******* */}
        <button
          onClick={() => handle_account()}
          className="smscreens items-center  justify-center gap-1"
        >
          <span>account</span>
          {savedImage ? (
            <div className=" w-10 h-10 rounded-full">
              <img src={savedImage} alt="avatar" />
            </div>
          ) : (
            <span className="p-2 text-2xl  flex items-center justify-center">
              <FaCircleUser />
            </span>
          )}
        </button>
        {/* account drop menu *************** */}
        {account && (
          <div className="account-menu absolute top-12 right-5 flex flex-col items-center justify-center w-40 p-4 h-40 rounded-2xl">
            <button
              onClick={handle_login}
              className="w-full p-2 flex items-center justify-center"
            >
              Login
            </button>
            <button 
            onClick={() => handle_register()}
            className="w-full p-2 flex items-center justify-center">
              Register
            </button>
            <button
              onClick={() => handle_settings()}
              className="w-full p-2 flex items-center justify-center"
            >
              Settings
            </button>
          </div>
        )}
      </div>
      {/* Login and Register Menu ************* */}
      { login && (
        <div
          onClick={() => setLogin(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center "
        >
          <div className="w-[90%] sm:w-[60%] lg:w-[30%] "
           onClick={(e) => e.stopPropagation()}>
            <Login />
          </div>
        </div>
      )}
      {register && (
        <div
          onClick={() => setRegister(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center "
        >
          <div 
          className="w-[85%] sm:w-[50%] lg:w-[25%] "
          onClick={(e) => e.stopPropagation()}>
            <Register />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
