import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchSharp, IoHeart, } from "react-icons/io5";
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from "react-avatar-edit";

function Nav() {

    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    const handle_search = () => {
        document.getElementById('searchinp').classList.toggle('search-on');

    }
    const cart_items = useSelector(state => state.cart.items)

    const handle_nav = (e) => {
        if (e.key === "Enter") { navigate(`/search/${keyword}`, { state: { keyword } }) };
    }
// toggle account settings
  const [account, setAccount] = useState(false);
  const handle_account = () => {
    setAccount(!account);
  };
  // handle avatar
  const [avatar, setAvatar] = useState(false);
  const handle_avatar = () => {
    setAvatar(true);
  };
//   handle settings toggler
  const [settings, setSettings] = useState(false);
  const handle_settings = () => {   
    setSettings(!settings);
    setAccount(false);

  };
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };
  const [savedImage, setSavedImage] = useState(null);
  
  const handle_save = () => {
      if (preview !== null) {
          setSavedImage(preview);
          localStorage.setItem("avatar", preview);
          setAvatar(false);
        }
        else {
            setSavedImage(null);
            localStorage.removeItem("avatar");
            setAvatar(false);
            
        }
    };
    const handle_delete_avatar = () => {
        setPreview(null);
      setSavedImage(null);
      localStorage.removeItem("avatar");
    };

//  handle theme
const handle_theme = () => {
    const root = document.documentElement;
    root.classList.toggle("darktheme");
    console.log('theme changed');
  };

    return (
        <nav className='navbar relative w-full h-[10vh] flex items-center justify-between px-2 sm:px-10 top-0  z-50 ' >
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
            onClick={() => handle_theme()}
            >
                Change Theme
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
        className=" bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center ">
          <div 
          onClick={(e) => e.stopPropagation()}
          className=" bg-[rgb(255,255,255,.4)] w-[50%] p-6 rounded-lg drop-shadow-2xl backdrop-blur-sm mx-auto flex items-center justify-center flex-col gap-4">
            <h2>Avatar Editor</h2>
            <Avatar
              width={300}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
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
            <div className='flex flex-1 items-center justify-start '>
                <Link to="/">
                <img className=' w-8 sm:w-10 ' src={logo} alt="Store logo" />
                </Link>
            </div>
            <Link to="/"
                className='logo flex items-center justify-center flex-1 text-xl font-bold'>
                Innovia
            </Link>
            <div className='hidden flex-1 items-center justify-end sm:flex  gap-3 text-xl'>               
                    <input
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={handle_nav}
                        id='searchinp'
                        placeholder='Search...'
                        className='nav-search w-0 bg-white rounded-lg caret'
                        type="text" />
                

                <div
                    onClick={() => handle_search()}
                    className='flex items-center justify-center gap-1'>

                    <button
                        className='hover:scale-[1.1] text-2xl'
                    >
                        <IoSearchSharp />
                    </button>
                </div>
                <span className='divider'>|</span>

                <button
                    onClick={() => navigate('/favorites')}
                    className='flex items-center justify-center gap-1'>
                    <span>favorites</span>
                    <span className='text-2xl'>
                        <IoHeart />
                    </span>
                </button>
                <span className='divider'>|</span>
                <button
                    onClick={() => navigate('/cart-items')}
                    className='flex items-center justify-center gap-1'>
                    <span>cart</span>

                    <span className='relative text-2xl'><FaCartShopping />
                        {cart_items.length >= 1 ? <span className='bg-amber-400 flex w-5 h-5  text-lg items-center justify-center  rounded-full absolute -top-3 -right-2'>
                            {cart_items.length}
                        </span> :
                            <span></span>
                        }

                    </span>

                </button>
                <span className='divider'>|</span>
                <button
                onClick={() => handle_account()}
                className='flex items-center justify-center gap-1'>
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
                    {/* <span className='text-2xl'> <FaCircleUser /> </span> */}
                </button>
                {account && <div className='account-menu absolute top-12 right-5 flex flex-col items-center justify-center w-40 p-4 h-40 rounded-2xl'>
                    <button className='w-full p-2 flex items-center justify-center'>Login</button>
                    <button className='w-full p-2 flex items-center justify-center'>Register</button>
                    <button 
                    onClick={() => handle_settings()}
                    className='w-full p-2 flex items-center justify-center'>Settings</button>
                </div>}
            </div>
        </nav>
    )
}

export default Nav