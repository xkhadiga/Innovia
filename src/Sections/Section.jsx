import React from 'react'
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

function Section({ data, category }) {

  const navigate = useNavigate();
  const [productName, setProductName] = useState('');

  useEffect(() => {
    if (data.length > 0) {
      setProductName(data[0].category); 
    }
  }, [data]);
  
  
  return (
    <section className='main-section flex flex-col justify-center my-3 rounded-xl p-2 mx-auto w-[95%]'>
      <div className='section-header flex items-center justify-between text-xl p-3 font-bold '>
        <h1> {category}</h1>
        <button 
        onClick={()=> navigate(`/category/${category}` , {state: {name: productName } })}
        className='browse cursor-pointer'>Browse all</button>
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