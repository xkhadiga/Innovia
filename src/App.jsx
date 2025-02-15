
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from './Pages/Favorites'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
