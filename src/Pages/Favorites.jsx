import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'

function Favorites() {

    const favorites = useSelector(state => state.favorites)
    if (favorites.length === 0 ) {return <div>no items</div>}
    else return (
        <>
            <section className='main-section flex flex-col justify-center my-3 rounded-xl p-2 mx-auto w-[95%]'>
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