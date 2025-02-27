import React, { lazy, Suspense, useEffect, useState } from "react";
import logo from "../assets/logo.png";

import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "react-avatar-edit";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { RegisterContext } from "../Context/RegisterContext";
import { BarContext } from "../Context/BarContext";


const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import Loader from "./Loader";

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
  const {
    savedImage,
    setSavedImage,
    avatar,
    setAvatar,
    handle_avatar,
    preview,
    setPreview,
    msrc,
    setMsrc,
    onClose,
    onCrop,
    handle_save,
    handle_delete_avatar,
  } = useContext(BarContext);

  //  handle theme
  const { handle_theme, theme } = useContext(ThemeContext);
  // handle login
  const { login, setLogin, handle_login } = useContext(LoginContext);
  // handle register
  const { register, setRegister, handle_register } =
    useContext(RegisterContext);
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
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              ) : (
                <span className="sidebar-sun ">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
                      fill="currentColor"
                    />
                  </svg>
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
        {/* Search Icon */}
        <button
          onClick={() => handle_search()}
          className="nav-search-icon hover:scale-[1.1] text-xl mx-3 sm:mx-0 sm:text-lg "
        >
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span className="smscreens divider">|</span>
        {/* Favorites link ************** */}
        <button
          onClick={() => navigate("/favorites")}
          className="smscreens  items-center justify-center gap-1"
        >
          <span>favorites</span>
          <span>
            <svg
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                fill="currentColor"
              />
            </svg>
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
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.23737 2.28845C1.84442 2.15746 1.41968 2.36983 1.28869 2.76279C1.15771 3.15575 1.37008 3.58049 1.76303 3.71147L2.02794 3.79978C2.70435 4.02524 3.15155 4.17551 3.481 4.32877C3.79296 4.47389 3.92784 4.59069 4.01426 4.71059C4.10068 4.83049 4.16883 4.99538 4.20785 5.33722C4.24907 5.69823 4.2502 6.17 4.2502 6.883L4.2502 9.55484C4.25018 10.9224 4.25017 12.0247 4.36673 12.8917C4.48774 13.7918 4.74664 14.5497 5.34855 15.1516C5.95047 15.7535 6.70834 16.0124 7.60845 16.1334C8.47542 16.25 9.57773 16.25 10.9453 16.25H18.0002C18.4144 16.25 18.7502 15.9142 18.7502 15.5C18.7502 15.0857 18.4144 14.75 18.0002 14.75H11.0002C9.56479 14.75 8.56367 14.7484 7.80832 14.6468C7.07455 14.5482 6.68598 14.3677 6.40921 14.091C6.17403 13.8558 6.00839 13.5398 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7522C18.2128 12.5045 18.4017 12.0636 18.7797 11.1817L19.2082 10.1817C20.0177 8.2929 20.4225 7.34849 19.9779 6.67422C19.5333 5.99996 18.5058 5.99996 16.4508 5.99996H5.74526C5.73936 5.69227 5.72644 5.41467 5.69817 5.16708C5.64282 4.68226 5.52222 4.2374 5.23112 3.83352C4.94002 3.42965 4.55613 3.17456 4.1137 2.96873C3.69746 2.7751 3.16814 2.59868 2.54176 2.38991L2.23737 2.28845Z"
                fill="currentColor"
              />
              <path
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                fill="currentColor"
              />
              <path
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                fill="currentColor"
              />
            </svg>
            {cart_items.length >= 1 ? (
              <span className="bg-amber-400 flex w-5 h-5 text-black  text-lg items-center justify-center  rounded-full absolute -top-3 -right-1">
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
            <span className="p-2   flex items-center justify-center">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM18.3775 17.2942C18.7303 17.8695 18.6055 18.63 18.0369 18.9935C17.5199 19.3241 16.9158 19.5265 16.3159 19.6598C15.2322 19.9006 13.8299 20 11.9998 20C10.1698 20 8.76744 19.9006 7.68381 19.6598C7.09516 19.529 6.50205 19.3319 5.99131 19.012C5.41247 18.6495 5.28523 17.8786 5.64674 17.2991C6.06303 16.6318 6.63676 16.1075 7.40882 15.7344C8.58022 15.1684 10.1157 15 11.9996 15C13.8771 15 15.4109 15.1548 16.5807 15.7047C17.3727 16.077 17.9572 16.6089 18.3775 17.2942Z"
                  fill="currentColor"
                />
              </svg>
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
              className="w-full p-2 flex items-center justify-center"
            >
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
      {login && (
        <div
          onClick={() => setLogin(false)}
          className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center "
        >
          <div
            className="w-[90%] sm:w-[60%] lg:w-[30%] "
            onClick={(e) => e.stopPropagation()}
          >
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
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
            onClick={(e) => e.stopPropagation()}
          >
            <Suspense fallback={<Loader />}>
            <Register />
            </Suspense>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
