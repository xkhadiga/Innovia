import React, { useState, useEffect } from 'react'
import { FaCaretSquareUp } from 'react-icons/fa'
import { Link } from 'react-scroll';


function Up() {

    // const handle_up = () => {
    //     document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    // }

    return (
        <Link to="section1" smooth={true} duration={500}>
        <button
        //   onClick={() => handle_up()}
          className='up-btn text-2xl fixed z-50 bottom-20 right-2 sm:bottom-5 sm:right-5 '>
          <FaCaretSquareUp />
        </button>
        </Link>
    )
}

export default Up