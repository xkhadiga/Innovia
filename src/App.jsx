
import './App.css'
import Home from './Home'
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from './Pages/Favorites'
import { Element } from 'react-scroll';
import Sidebar from './Components/Sidebar';
import { useEffect, useState } from 'react';
import Cart from './Pages/Cart';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
const [visible, setVisible] = useState(false);
const handle_visible=() => {
  if (  window.scrollY > 700){
    setVisible(true) }
    else {
      setVisible(false)
    }
}
useEffect(()=>{
document.addEventListener("scroll" , handle_visible)
return () => {document.removeEventListener("scroll" , handle_visible)}
},[])
  return (
    <>
          <ToastContainer />              

      <Element name="section1">
        <Nav />
      </Element> 
      {visible && (
       <Sidebar />
      )}    

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/cart-items' element={<Cart />} />
      </Routes>
      

    </>
  )
}

export default App
