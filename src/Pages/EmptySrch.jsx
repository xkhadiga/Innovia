import React from 'react'
import error from '../assets/error2.png'
import thinking from '../assets/thinking.png'
function EmptySrch() {
  return (
    <div className="empty-con flex flex-col justify-center items-center p-10">
            <span className="w-[80%] sm:w-[30%] flex ">
              <img src={error} alt="error image" loading="lazy" />
            </span>
          <h2 className=" text-2xl font-semibold text-center">Oops! No results found.</h2>
          <p className=" mt-2 text-center flex items-center">404: Search results not found. Try again? <span className='relative -top-1'><img src={thinking} alt="" /></span></p>
    </div>
  )
}

export default EmptySrch