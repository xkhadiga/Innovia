import "./App.css";
import Home from "./Home";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import { Element } from "react-scroll";
import Sidebar from "./Components/Sidebar";
import { useEffect, useState } from "react";
import Cart from "./Pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Item from "./Pages/Item";
import Search from "./Pages/Search";
import Category from "./Pages/Category";
import Loader from "./Components/Loader";
import Payment from "./Components/Payment";
import { ThemeProvider } from "./Context/ThemeContext";
import { LoginProvider } from "./Context/LoginContext";
import { RegisterProvider } from "./Context/RegisterContext";

function App() {
  const [visible, setVisible] = useState(false);
  const handle_visible = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handle_visible);
    return () => {
      document.removeEventListener("scroll", handle_visible);
    };
  }, []);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <ThemeProvider>
      <RegisterProvider>
        <LoginProvider>
          {loader ? (
            <Loader />
          ) : (
            <>
              <Element name="section1">
                <Nav />
              </Element>
              {visible && <Sidebar />}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart-items" element={<Cart />} />
                <Route path="/product/:productName" element={<Item />} />
                <Route path="/search" element={<Search />} />
                <Route path="/search/:productName" element={<Search />} />
                <Route path="/category" element={<Category />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/category/:categoryName" element={<Category />} />
              </Routes>

              <ToastContainer />
            </>
          )}
        </LoginProvider>
      </RegisterProvider>
    </ThemeProvider>
  );
}

export default App;
