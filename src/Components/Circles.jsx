import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import Right from "../assets/icons/right.svg";
import Left from "../assets/icons/left.svg";

import { useNavigate } from "react-router-dom";

function Circles() {
  // handle api *******
  const [categories, setCategories] = useState([]);
  const handle_api = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    setCategories(response.data);
  };
  useEffect(() => {
    handle_api();
  }, []);
  const navigate = useNavigate();

  // handle sliding ******
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 7;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < categories.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };
  return (
    <div className="circles-container flex my-2  relative  w-[95%] mx-auto overflow-hidden justify-center items-center ">

              {/* Left Button */}
      <button
        onClick={prevSlide}
        className="circles-btn text-3xl z-10  disabled:opacity-50 disabled:scale-1"
        disabled={startIndex === 0}
      >
        {/* Left Icon */}
        <svg  width="30px" height="30px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" />
</svg>
      </button>
      <div className="circles-wrapper flex w-[90%] rounded-full  items-center justify-center p-3">
        {categories
          .slice(startIndex, startIndex + itemsPerPage)
          .map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/category/${item.slug}`, {
                  state: { name: item.slug },
                })
              }
              className="loader-x circle-item  w-25 h-25 min-w-25 min-h-25 
  sm:-35 sm:h-35 sm:min-w-35 sm:min-h-35 rounded-full flex items-center justify-center text-wrap text-center text-sm sm:text-lg  font-bold mx-1 p-3 "
            >
              <h1> {item.name} </h1>
            </div>
          ))}
      </div>

                    {/* Right Button */}
      <button
        onClick={nextSlide}
        className="circles-btn text-3xl z-10  disabled:opacity-50 disabled:scale-1"
        disabled={startIndex + itemsPerPage >= categories.length}
      >
                {/* Right Icon */}

       <svg width="30px" height="30px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" />
</svg>
      </button>
    </div>
  );
}

export default Circles;
