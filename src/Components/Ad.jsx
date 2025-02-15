import React from 'react'

function Ad( {ad1} ) {
  return (
    <div className=' flex h-[30vh] mx-auto  w-[95%]'>
        <img className='ad' src={ad1} alt="sale image" />
        </div>
  )
}

export default Ad