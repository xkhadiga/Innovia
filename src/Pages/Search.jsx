import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../Components/Card';
import EmptySrch from './EmptySrch';

function Search() {
    const { productName } = useParams();
    const location = useLocation();
    const keyword = location.state?.keyword;
    const [currentData, setCurrentData] = useState([]);


    useEffect(() => {
        const handle_api = async () => {
            try {
                const API = `https://dummyjson.com/products/search?q=${keyword}`
                const response = await axios.get(API);
                setCurrentData(response.data.products);
            }
            catch (err) {
                console.error(err);
            }
        }
        handle_api();
    }, [keyword]);


    return (
        <div>
            <section className='main-section flex flex-col justify-center my-3 rounded-xl p-2 mx-auto w-[95%]'>
                <div className='flex flex-wrap justify-center '>
                    { currentData.length > 0   ?  currentData.map((product) =>
                        <Card product={product} key={product.id} />
                    ) :
                    <div>
                    <h2 className="bg-black ext-2xl font-semibold text-gray-700">Oops! No results found.</h2>
                    <p className="text-gray-500 mt-2">Try a different keyword or check your spelling.</p>
              </div>               
                }

                </div>
            </section>
        </div>
    )
}

export default Search