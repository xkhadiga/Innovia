import React from 'react'
import error from '../assets/error.svg'
import thinking from '../assets/thinking.png'
function EmptySrch() {
  return (
    <div className='bg-white flex flex-col justify-center items-center  rounded-xl p-2 h-[90vh]  w-full'>
      <img className='w-[70vh]' src={error} alt="" />
          <h2 className=" text-2xl font-semibold text-gray-700 text-center">Oops! No results found.</h2>
          <p className="text-gray-500 mt-2 text-center flex items-center">404: Search results not found. Try again? <span className='relative -top-1'><img src={thinking} alt="" /></span></p>
    </div>
  )
}

export default EmptySrch