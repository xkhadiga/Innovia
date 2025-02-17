import React from 'react'
import { IoMenu, IoHome, IoSearchSharp, IoCart, IoHeart, IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Sidebar() {
const navigate = useNavigate();
const cart_items = useSelector(state => state.cart.items)
  const handle_sidebar = () => {
    document.getElementById('nav').classList.toggle('expanded');
  }

  return (
    
    <nav id='nav'
      className='sidebar fixed flex flex-col items-start justify-center  rounded-lg overflow-hidden top-10 z-40'>
      <span className='mx-auto my-5'>
        <img className='w-5' src={logo} alt="Store logo" />
      </span>
      <button
        onClick={() => handle_sidebar()}
        className='sm:mt-15 mt-5 p-2 gap-2 flex flex-col items-center justify-center text-xl'>
        <IoMenu />
      </button>

      <div className='links-container h-full w-10  flex flex-col my-5 sm:my-10 items-center justify-between gap-2'>
        <div className='flex flex-col items-start justify-start gap-2 w-10 '>

        <Link to="section1" smooth={true} duration={500}>
          <button className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoHome /></span>
            {/* <span className='border-gray-400 border-b w-32'>Home</span> */}
          </button>
        </Link>
          <button className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoSearchSharp /></span>
            {/* <span className='border-gray-400 border-b  w-32'>
              Search
 
            </span> */}
          </button>
          <button 
          onClick={()=> navigate('/cart-items')}
          className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl relative'>
              <IoCart />
              <span className='bg-amber-400 flex w-5 h-5  text-sm items-center justify-center  rounded-full absolute -top-2 right-0'>
                        {cart_items.length}
                    </span>
              </span>
            {/* <span className='text-nowrap border-gray-400 border-b  w-32'>
              Cart Items
            </span> */}
          </button>
          <button 
          onClick={()=> navigate('/favorites')}
          className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoHeart /></span>
            {/* <span className=' w-32'>
              Favorites
            </span> */}
          </button>

        </div>
        <div>
          <button className='p-2  flex items-center justify-center'>
            <IoSettings />
          </button>
          <button className='p-2  flex items-center justify-center'>
            <FaUser />
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Sidebar