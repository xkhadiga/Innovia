import React, { useState } from 'react'
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

  const [ searchToggle, setSearchToggle] = useState(false);
  const [keyword, setKeyword] = useState('');
  const handle_searchToggle = () => {
    setSearchToggle(true);
  }
  const search_keydown = (e) => {
    if (e.key === 'Enter') {
      setSearchToggle(false);
      navigate(`/search/${keyword}`, {state: {keyword}})
    }
  }
  return (
    <div className='relative'>
          {searchToggle && (
          <div 
          onClick={()=> setSearchToggle(false)}
          className='bg-[rgb(119,119,119,.5)] fixed top-0 bottom-0 right-0 left-0 w-full z-50 flex items-center justify-center'>
            <div 
            onClick={(e) => e.stopPropagation()}
            className=' bg-[rgb(255,255,255,.4)] w-[70%] p-6 rounded-lg drop-shadow-2xl backdrop-blur-sm mx-auto'>
              <input 
              onChange={(e)=> setKeyword(e.target.value)}
              onKeyDown={search_keydown}
              className='sidebar-search p-3 w-full pl-6 outline-amber-100 bg-white rounded-full '
              placeholder='Search...'
              type="text" />
            </div>
          </div>
        )}
    <nav id='nav'
      className='sidebar fixed flex flex-col items-start justify-center rounded-lg overflow-hidden top-10 z-40'>

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
            <button onClick={() => navigate('/')}
              className=' flex  items-center gap-4 justify-center'>
              <span className='p-2 text-xl'><IoHome /></span>
              {/* <span className='border-gray-400 border-b w-32'>Home</span> */}
            </button>
          </Link>
          <button 
          onClick={()=> handle_searchToggle()}
          className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl'><IoSearchSharp /></span>
            {/* <span className='border-gray-400 border-b  w-32'>
              Search
 
            </span> */}
          </button>
          <button
            onClick={() => navigate('/cart-items')}
            className=' flex  items-center gap-4 justify-center'>
            <span className='p-2 text-xl relative'>
              <IoCart />
              {cart_items.length >= 1 ? <span className='bg-amber-400 flex w-5 h-5  text-sm items-center justify-center  rounded-full absolute -top-2 right-0'>
                {cart_items.length}
              </span> : <span></span>}

            </span>
            {/* <span className='text-nowrap border-gray-400 border-b  w-32'>
              Cart Items
            </span> */}
          </button>
          <button
            onClick={() => navigate('/favorites')}
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

    </div>
  )
}

export default Sidebar