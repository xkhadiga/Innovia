import React, { useState } from 'react'
import shop from '../assets/shopping.jpg'
import shop2 from '../assets/shopping2.jpg'
import { useRef, useEffect } from 'react'
import axios from 'axios'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function CircleCard() {
const sliderRef= useRef(null);
const slideLeft = () =>{
if(sliderRef.current.scrollLeft > 0){
  sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth , behavior: 'smooth'});
}
else {sliderRef.current.scrollBy({left : 0})}

}
const slideRight = () => {
if (sliderRef.current ){
  sliderRef.current.scrollBy({left: -sliderRef.current.offsetWidth , behavior: 'smooth'});
}
}

const [data, setData]=useState([]);

const handle_api = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  setData(response.data)

  }
  useEffect(()=>{
    handle_api();

},[])


const navigate = useNavigate();

  return (
<div 

className='circles-container flex  my-2  relative  w-[95%] mx-auto overflow-hidden justify-center items-center '>
<button className='circles-btn text-3xl z-10 absolute left-0 lg:left-20' onClick={()=> slideRight()}> <MdKeyboardDoubleArrowLeft />

</button>
<div 
ref={sliderRef}
className='circles-wrapper py-1 px-1 overflow-x-scroll flex w-[76%] rounded-full '>
  {data.map((item , index) => 
  <div key={index}
  onClick={()=> navigate(`/category/${item.slug}` , {state: {name: item.slug} })}
    className='loader-x circle-item min-w-35 min-h-35 rounded-full flex items-center justify-center  text-center text-xl font-bold mx-1 p-3'> 
     <h1> {item.name} </h1>
    </div> )}

</div>
<button className='circles-btn text-3xl z-10 absolute right-0 lg:right-20' onClick={()=> slideLeft()}><MdKeyboardDoubleArrowRight />
</button>

</div>
  )
}

export default CircleCard