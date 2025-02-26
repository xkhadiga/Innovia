import React from 'react'
import { useState, useEffect } from 'react'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function CategoriesSm() {

    // handle api *******
const [categories, setCategories] = useState( [] );
const handle_api = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  setCategories(response.data)
  }
  useEffect(()=>{
    handle_api();
},[])

const navigate = useNavigate();
const location = useLocation();


if (!location.state?.allowed) {return <div>Not Allowed</div>}
  else return (
    <div className='w-full    p-2'>
        <h1 className='categories-sm-h text-center my-3 text-xl font-bold'>Categories</h1>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
        {categories.map((item,index)=>
        
            <div key={index}
            onClick={()=> navigate(`/category/${item.slug}` , {state: {name: item.slug} })}
            className='categories-sm-i  w-25 h-25 min-w-25 min-h-25 
              flex items-center justify-center text-wrap text-center text-sm  font-bold p-3 ' 
              > 
               <h1> {item.name} </h1>
              </div>
        )}
        </div>
    </div>
  )
}

export default CategoriesSm