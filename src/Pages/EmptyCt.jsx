import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'
import cart from '../assets/cart.gif'

function EmptyCt() {
    return (
        <section className='flex flex-col justify-center items-center my-10 rounded-xl p-2 mx-auto w-[95%] h-[70vh] '>
            <span className='w-52 flex '>
                {/* <FaCartShopping /> */}
                <img src={cart} alt="" />
            </span>
        <h1 className='text-4xl text-center my-3'>
        Oops! Looks like you haven’t added anything yet.
        </h1>
        <Link  to="/"
        className='bg-black shadow-lg shadow-gray-500 text-white  py-2 px-6 rounded-full text-xl m-5 cursor-pointer'>
            add some items    
        </Link>
        </section>
    )
}

export default EmptyCt