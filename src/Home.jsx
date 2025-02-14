import React from 'react'
import Sidebar from './Components/Sidebar'
import Nav from './Components/Nav'
import MainSlider from './Components/MainSlider'
import CircleCard from './Components/CircleCard'

function Home() {
  return (
    <div className='relative max-w-[100%]'>
        <Nav />
        <div className='flex'>
        <div className='relative '>   
          <Sidebar />
        </div>
        <div className=' mx-2 max-w-[95%] flex flex-col'>
        <MainSlider />
        <CircleCard />
        </div>
        </div>




    </div>
  )
}

export default Home