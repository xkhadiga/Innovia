import React from 'react'
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
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
          <svg fill="currentColor" width="1.2rem" height="1.2rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>right-round</title>
<path d="M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392 6.208-1.28q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12 1.28 6.208q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424-6.208 1.248-6.208-1.248-5.12-3.424-3.392-5.12-1.28-6.208zM4 16q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048-1.6-6.016-4.384-4.352-6.016-1.632-6.016 1.632-4.384 4.352-1.6 6.016zM8 16q0-0.832 0.576-1.408t1.44-0.576h5.984v-2.016q0-0.608 0.352-1.088t0.896-0.736 1.152-0.128 1.024 0.544l4 4q0.576 0.576 0.576 1.408t-0.576 1.408l-4 4q-0.448 0.448-1.024 0.576t-1.152-0.128q-0.576-0.224-0.896-0.736t-0.352-1.12v-1.984h-5.984q-0.832 0-1.44-0.576t-0.576-1.44z"></path>
</svg>
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