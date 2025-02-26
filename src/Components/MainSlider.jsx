import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/components/LazyLoadImage';
import BackgroundSlider from "react-background-slider";


function MainSlider() {
const images = [
  "../assets/shopping4.jpg",
  "../assets/shopping2.jpg",
  "../assets/shopping3.jpg",
]
// slides w-full h-full rounded-lg flex justify-center items-center
  return (
    <div className="relative flex mx-auto w-[95%]  h-[65vh]   rounded-lg">
       <BackgroundSlider images={images} duration={4} transition={2} />
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <h1 className=' text-5xl sm:text-6xl font-bold text-white'>
        Shop Smarter, Live Better!
        </h1>

        <LazyLoadImage
          src="./assets/shopping4.jpg"
          effect="blur"
          className="w-[60%] mt-6 rounded-lg shadow-lg"
          alt="Promotional Banner"
        />
      </div>
    </div>
  );
}

export default MainSlider;
