import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import Card from '../Components/Card';

function Category() {
    const location = useLocation();
    const { categoryName } = useParams();
    const name = location.state?.name
    const [data, setData ]= useState([]);

    useEffect(()=>{
        const handle_api= async () => {
            try {
                const API = `https://dummyjson.com/products/category/${name}`
                const response = await axios.get(API);
                setData(response.data.products);
            }
            catch(err){
                console.error(err);
            }
        }
        handle_api();
    },[name])

    return (
        <div>
            <section className='main-section flex flex-col justify-center my-3 rounded-xl p-2 mx-auto w-[95%]'>
                <div className='flex flex-wrap justify-center '>
                    
                    {data.map((product)=>
                    <Card key={product.id} product={product}/>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Category