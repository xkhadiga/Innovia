import React from 'react'
import Card from '../Components/Card';

function SmallSection( {data, category}  ) {

  return (
    <section className='main-section flex flex-col justify-center my-3 rounded-xl p-2 mx-auto w-[95%]'>
      <div className='section-header flex items-center justify-between text-xl p-3 font-bold cursor-pointer'>
      <h1>{category}</h1>
      <h1>Browse all</h1>
      </div>

      <div className='flex flex-wrap justify-center '>
      {data.slice(0,4).map((product)=> (

<Card key={product.id} product={product} />
))}
      </div>

    </section>
  )
}

export default SmallSection