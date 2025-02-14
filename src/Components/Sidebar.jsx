import React from 'react'
import { IoMenu, IoHome, IoSearchSharp, IoCart, IoHeart, IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import logo from '../assets/logo.png'




function Sidebar() {

  const handle_sidebar = () => {
    document.getElementById('nav').classList.toggle('expanded');
  }

  return (
    <nav id='nav'
      className='sidebar flex flex-col items-start justify-center bg-amber-200 h-[90vh] rounded-lg overflow-hidden relative '>
      {/* <span className='mx-auto my-5'>
        <img className='w-5' src={logo} alt="Store logo" />
      </span> */}
      <button
        onClick={() => handle_sidebar()}
        className='mt-5 p-2 gap-2 flex flex-col items-center justify-center text-xl'>
        <IoMenu />
      </button>

      <div className='links-container h-full w-10  flex flex-col my-5 sm:my-10 items-center justify-between gap-2'>
        <div className='flex flex-col items-start justify-start gap-2 w-10 '>


          <button className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoHome /></span>
            <span>Home</span>
          </button>
          <button className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoSearchSharp /></span>
            <span>
              Search
            </span>
          </button>
          <button className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoCart /></span>
            <span className='text-nowrap'>
              Cart Items
            </span>
          </button>
          <button className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoHeart /></span>
            <span>
              Favorites
            </span>
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