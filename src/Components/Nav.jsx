import React from 'react'
import logo from '../assets/logo.png'
import {  IoSearchSharp, IoHeart,} from "react-icons/io5";
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Nav() {

    const navigate = useNavigate();
    const handle_search=() => {
        document.getElementById('searchinp').classList.toggle('search-on')
    }
    const cart_items = useSelector(state => state.cart.items)
    return (
        <nav className='navbar relative w-full h-[10vh] flex items-center justify-between px-2 sm:px-10 top-0  z-50 ' >
            <div className='flex flex-1 items-center justify-start '>
                <img className=' w-8 sm:w-10 ' src={logo} alt="Store logo" />
            </div>
            <Link  to="/"
            className='logo flex items-center justify-center flex-1 text-xl font-bold'>
                Innovia
            </Link>
            <div className='hidden flex-1 items-center justify-end sm:flex  gap-3 text-xl'>
                <input 
                id='searchinp'
                placeholder='Search...'
                className='nav-search w-0 bg-white rounded-lg focus:outline-amber-100' 
                type="text" />
                <div className='flex items-center justify-center gap-1'>
                 
                    <button 
                    className='hover:scale-[1.1] text-2xl'
                    onClick={()=> handle_search()}>
                        <IoSearchSharp />
                    </button>
                </div>
                <span className='divider'>|</span>

                <button 
                onClick={()=> navigate('/favorites')} 
                className='flex items-center justify-center gap-1'>
                    <span>favorites</span>
                    <span className='text-2xl'>
                        <IoHeart />
                    </span>
                </button>
                <span className='divider'>|</span>
                <button  
                onClick={()=> navigate('/cart-items')} 
                className='flex items-center justify-center gap-1'>
                    <span>cart</span>

                    <span className='relative text-2xl'><FaCartShopping />  
                    <span className='bg-amber-400 flex w-5 h-5  text-lg items-center justify-center  rounded-full absolute -top-3 -right-2'>
                        {cart_items.length}
                    </span>
                    </span>

                </button>
                <span className='divider'>|</span>
                <button  className='flex items-center justify-center gap-1'>
                    <span>profile</span>
                    <span className='text-2xl'> <FaCircleUser /> </span>
                </button>
            </div>
        </nav>
    )
}

export default Nav