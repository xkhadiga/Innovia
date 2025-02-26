import React from 'react'
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-scroll';


function Section({ data, category }) {

  const navigate = useNavigate();
  // Browse all button
  const [productName, setProductName] = useState('');

  useEffect(() => {
    if (data.length > 0) {
      setProductName(data[0].category); 
    }
  }, [data]);
  
  
  return (
    <section className='main-section flex flex-col justify-center my-3 rounded-xl sm:p-2 mx-auto w-[95%]'>
      <div className='section-header flex items-center justify-between sm:text-xl p-3 font-bold '>
        <h1> {category}</h1>
        <Link to="section1" smooth={true} duration={500}>
        <button 
        onClick={()=> navigate(`/category/${category}` , {state: {name: productName } })}
        className='browse cursor-pointer sm:text-xl'>
          <FaCircleArrowRight />
        </button>
        </Link>
      </div>

      <div className='flex flex-wrap justify-center '>
        {data.slice(0, 8).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

    </section>
  )
}

export default Section