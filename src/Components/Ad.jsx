import React from 'react'

function Ad( {ad1} ) {
  return (
    <div 
    onClick={()=> window.open("https://www.itskhadija.vercel.app","_blank")}
    className=' flex h-[30vh] mx-auto  w-[95%]'>
        <img className='ad' src={ad1} alt="sale image" />
        </div>
  )
}

export default Ad