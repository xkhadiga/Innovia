import React, { useState } from 'react'

import { useEffect } from 'react'
import axios from 'axios'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Circles() {

// handle api *******
const [categories, setCategories]=useState([]);
const handle_api = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  setCategories(response.data)
  }
  useEffect(()=>{
    handle_api();
},[])
const navigate = useNavigate();

// handle sliding ******
const [startIndex, setStartIndex] = useState(0);
const itemsPerPage = 7;

const nextSlide = () => {
  if (startIndex + itemsPerPage < categories.length) {
    setStartIndex(startIndex + itemsPerPage);
  }
};
const prevSlide = () => {
  if (startIndex > 0) {
    setStartIndex(startIndex - itemsPerPage);
  }
};
  return (
<div 

className='circles-container flex  my-2  relative  w-[95%] mx-auto overflow-hidden justify-center items-center '>
      <button
        onClick={prevSlide}
        className="circles-btn text-3xl z-10 absolute left-0 lg:left-20 disabled:opacity-50 disabled:scale-1"
        disabled={startIndex === 0}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>

<div 
className='circles-wrapper flex w-full rounded-full  items-center justify-center p-3'>
  {categories.slice(startIndex, startIndex + itemsPerPage).map((item, index) => 
  <div key={index}
  onClick={()=> navigate(`/category/${item.slug}` , {state: {name: item.slug} })}
  className='loader-x circle-item  w-25 h-25 min-w-25 min-h-25 
  sm:-35 sm:h-35 sm:min-w-35 sm:min-h-35 rounded-full flex items-center justify-center text-wrap text-center text-sm sm:text-lg  font-bold mx-1 p-3 ' 
    > 
     <h1> {item.name} </h1>
    </div> )}

</div>
<button
        onClick={nextSlide}
        className="circles-btn text-3xl z-10 absolute right-0 lg:right-20  disabled:opacity-50 disabled:scale-1"
        disabled={startIndex + itemsPerPage >= categories.length}
      >
        <MdKeyboardDoubleArrowRight />
      </button>

</div>
  )
}

export default Circles