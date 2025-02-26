import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'
import EmptyFv from './EmptyFv'

function Favorites() {

    const favorites = useSelector(state => state.favorites)
    if (favorites.length === 0 ) {return <EmptyFv />}
    else return (
        <>
            <section className='main-section flex flex-col justify-center my-8 rounded-xl sm:p-5 mx-auto w-[95%]'>
                <h1 className='section-hds text-center text-xl m-2 font-bold'>
                Favorites
                </h1>
                <div className='flex flex-wrap justify-center '>
                    {favorites.map((product) => (
                        <Card key={product.id} product={product} />

                    ))}
            </div>
            </section>



        </>
    )
}

export default Favorites