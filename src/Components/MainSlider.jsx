import React from 'react';
import img1 from '../assets/shopping.jpg';
import img2 from '../assets/shopping2.jpg';
import img3 from '../assets/shopping3.jpg';
import img4 from '../assets/shopping4.jpg';


function MainSlider() {


  return (
    <div className="flex w-full h-[70vh]   rounded-lg">
      <div className='slides w-full h-full rounded-lg flex justify-center items-center'>
        <h1 className=' text-5xl sm:text-6xl font-bold text-white'>
        Shop Smarter, Live Better!
        </h1>
      </div>
    </div>
  );
}

export default MainSlider;
