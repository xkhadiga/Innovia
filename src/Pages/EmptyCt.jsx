import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'
import cart from '../assets/emptycart.svg'

function EmptyCt() {
    return (
        <section className='empty-con main-section flex flex-col justify-center items-center my-10 rounded-xl p-2 mx-auto w-[95%] h-[70vh] '>
            <span className='w-[50%] sm:w-[30%] flex '>
                <img src={cart} alt="empty cart image" loading="lazy" />
            </span>
        <h1 className='text-2xl sm:text-4xl text-center my-3'>
        Oops! Looks like you haven’t added anything yet.
        </h1>
        <Link  to="/"
        className='card-btn empty-btn  py-2 px-6 rounded-full text-lg sm:text-xl m-5 cursor-pointer'>
            add some items    
        </Link>
        </section>
    )
}

export default EmptyCt