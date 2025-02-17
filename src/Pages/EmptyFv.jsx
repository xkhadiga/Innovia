import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function EmptyFv() {
    return (
        <section className='main-section flex flex-col justify-center items-center my-10 rounded-xl p-2 mx-auto w-[95%] h-[70vh]'>
            <span className='text-6xl my-6'>
                <FaRegHeart />
            </span>
        <h1 className='text-4xl text-center my-3'>
            your Favorites is empty
        </h1>
        <Link  to="/"
        className='bg-black shadow-lg shadow-gray-500 text-white  py-2 px-6 rounded-full text-xl m-5 cursor-pointer'>
            add some items    
        </Link>
        </section>
    )
}

export default EmptyFv