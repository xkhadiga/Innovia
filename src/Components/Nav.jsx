import React from 'react'
import logo from '../assets/logo.png'
import { IoMenu, IoHome, IoSearchSharp, IoCart, IoHeart, IoSettings } from "react-icons/io5";
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Nav() {
    const handle_search=() => {
        document.getElementById('searchinp').classList.toggle('search-on')
    }
    return (
        <nav className='navbar w-full h-[10vh] mb-2 flex items-center justify-between px-2 sm:px-10' >
            <div className='flex flex-1 items-center justify-start '>
                <img className=' w-8 sm:w-10 ' src={logo} alt="Store logo" />
            </div>
            <div className='logo flex items-center justify-center flex-1 text-xl font-bold'>
                Innovia
            </div>
            <div className='hidden flex-1 items-center justify-end sm:flex  gap-3 text-xl'>
                <input 
                id='searchinp'
                placeholder='Search...'
                className='nav-search w-0 bg-white rounded-lg focus:outline-amber-100' 
                type="text" />
                <div className='flex items-center justify-center gap-1'>
                 
                    <button 
                    className='hover:scale-[1.1]'
                    onClick={()=> handle_search()}>
                        <IoSearchSharp />
                    </button>
                </div>
                <span className='divider'>|</span>

                <Link 
                to='/favorites' 
                className='flex items-center justify-center gap-1'>
                    <span>favorites</span>
                    <span>
                        <IoHeart />
                    </span>
                </Link>
                <span className='divider'>|</span>
                <button  className='flex items-center justify-center gap-1'>
                    <span>cart</span>
                    <span><FaCartShopping />                    </span>
                </button>
                <span className='divider'>|</span>
                <button  className='flex items-center justify-center gap-1'>
                    <span>profile</span>
                    <span> <FaCircleUser /> </span>
                </button>
            </div>
        </nav>
    )
}

export default Nav