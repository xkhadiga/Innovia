import React from 'react'
import { useState, useEffect } from 'react'
import MainSlider from './Components/MainSlider'
import Ad from './Components/Ad'
import Section from './Sections/Section'
import axios from 'axios'
import SmallSection from './Sections/SmallSection'
import Up from './Components/Up'
import Circles from './Components/Circles'



/* ADS */
import ad1 from './assets/ad.jpg'
import ad2 from './assets/ad2.jpg'
import ad3 from './assets/ad3.jpg'
import ad4 from './assets/ad4.jpg'

function Home() {

  /*UP Button */
  const [visible, setVisible] = useState(false);

  const handle_visible = () => {
    if (window.scrollY > 300) { setVisible(true) }
    else { setVisible(false) }
  }
  useEffect(() => {
    window.addEventListener("scroll", handle_visible);
    return () => { window.removeEventListener("scroll", handle_visible) 

    };
  }, []);



  /*API's */
  const [FirstData, setFirstData] = useState([]);
  const [SecondData, setSecondData] = useState([]);
  const [ThirdData, setThirdData] = useState([]);
  const [FourthData, setFourthData] = useState([]);
  const [FifthData, setFifthData] = useState([]);
  const [SixthData, setSixthData] = useState([]);
  const [SeventhData, setSeventhData] = useState([]);

  const handle_api1 = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/kitchen-accessories');
    setFirstData(response.data.products)
  }
  const handle_api2 = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/groceries');
    setSecondData(response.data.products)
  }
  const handle_api3 = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/smartphones');
    setThirdData(response.data.products)
  }
  const handle_api4 = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/beauty');
    setFourthData(response.data.products)
  }
  const handle_api5 = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/sports-accessories');
    setFifthData(response.data.products)
  }
  const handle_api6 = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/mens-shirts');
    setSixthData(response.data.products)
  }
  const handle_api7 = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/mens-watches');
    setSeventhData(response.data.products)
  }
  useEffect(() => {
    handle_api1();
    handle_api2();
    handle_api3();
    handle_api4();
    handle_api5();
    handle_api6();
    handle_api7();
  }, [])
  return (
    <>
    <div className='relative overflow-hidden my-2  max-w-[100%] '>
      
      {visible && (
        <Up />
      )}
      <div className='flex  '>
        {/* <div className='flex-shrink-0 relative '>

        </div> */}
        <div className='flex-1 mx-1 lg:mx-2 w-[85%] lg:w-[95%] flex flex-col '>
          <MainSlider />
          <Circles />
          <Section data={FirstData} category='Kitchen Accessories' />
          <Ad ad1={ad2} />
          <Section data={SecondData} category='Groceries' />
          <Ad ad1={ad3} />
          <Section data={ThirdData} category='Smartphones' />
          <Ad ad1={ad4} />
          <SmallSection data={FourthData} category='Beauty' />
          <SmallSection data={SixthData} category='Mens Wear' />
          <Ad ad1={ad1} />

          <Section data={FifthData} category='Sports Accessories' />
          <SmallSection data={SeventhData} category='Mens Watches' />


        </div>
      </div>




    </div>
    </>
  )
}

export default Home