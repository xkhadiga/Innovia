import "./App.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Core Components
import Nav from "./Components/Nav";
import Loader from "./Components/Loader";
import Up from "./Components/Up";
import { Providers } from "./Context/Providers";

// Lazy-loaded Pages (for better performance)
const Home = lazy(() => import("./Home"));
const Favorites = lazy(() => import("./Pages/Favorites"));
const Cart = lazy(() => import("./Pages/Cart"));
const Sidebar = lazy(() => import("./Components/Sidebar"));
const Bar = lazy(() => import("./Components/Bar"));
const Item = lazy(() => import("./Pages/Item"));
const Search = lazy(() => import("./Pages/Search"));
const Category = lazy(() => import("./Pages/Category"));
const Payment = lazy(() => import("./Components/Payment"));
const CategoriesSm = lazy(() => import("./Pages/CategoriesSm"));

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

  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000);
  // }, []);
  return (
    <Providers>
                {visible && <Sidebar />}
                <Suspense fallback={<Loader />}>
              <div className="overflow-x-hidden">
                <Element name="section1">
                  <div className="main-nav-container max-w-[100%] relative">
                    <Nav />
                  </div>
                </Element>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/cart-items" element={<Cart />} />
                  <Route path="/product/:productName" element={<Item />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/search/:productName" element={<Search />} />
                  <Route path="/category" element={<Category />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route
                    path="/category/:categoryName"
                    element={<Category />}
                  />
                  <Route path="/categories" element={<CategoriesSm />} />
                </Routes>


                <div className="lgscreens relative ">
                  <Bar />
                </div>
                {/* {visible && <Up />} */}
                <ToastContainer />
              </div>
              </Suspense>
    </Providers>
  );
}

export default App;
