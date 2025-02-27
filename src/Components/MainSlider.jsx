import React from 'react';
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState, useEffect } from 'react';

function MainSlider() {
  const images = [
    "../assets/shopping4.jpg",
    "../assets/shopping2.jpg",
    "../assets/shopping3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative flex mx-auto w-[95%] h-[65vh] rounded-lg overflow-hidden">

      <img
        src={images[currentIndex]}
        effect="blur"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loading ? 'image-placeholder opacity-50' : 'opacity-100'}`}
        alt="Shopping Slide"
        onLoad={() => setLoading(false)}
      />
      {/* <div className='slides w-full h-full rounded-lg flex justify-center items-center'>
      </div> */}
      <div className='absolute inset-0 flex justify-center items-center'>
        <h1 className=' text-5xl sm:text-6xl font-bold text-white'>
        Shop Smarter, Live Better!
        </h1>

      </div>


    </div>
  );
}

export default MainSlider;
