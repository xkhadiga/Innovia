import React, { useEffect, useState } from "react";
import {
  add_to_favorites,
  remove_from_favorites,
} from "../Redux/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, remove_from_cart } from "../Redux/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


import MyBag from '../assets/icons/pinkbag.svg'

function Card({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((item) => item.id === product.id);
  const handleFavorites = () => {
    if (isFavorite) {
      dispatch(remove_from_favorites(product));
    } else {
      dispatch(add_to_favorites(product));
    }
  };

  /* ADD to Cart Button */
  const cart_items = useSelector((state) => state.cart.items);
  const cartItem = cart_items.find((item) => item.id === product.id);
  const productQuantity = cartItem ? cartItem.pquantity : 0;
  const [tag, setTag] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const handle_add = () => {
    dispatch(add_to_cart(product));
    setOpenAdd(true);
    toast.success(`Added ${product.title} to your cart`, {
      position: "bottom-left",
      autoClose: 2000,
    });
  };

  useEffect(() => {
    if (productQuantity === 0) {
      setOpenAdd(false);
      setTag(false);
    } else {
      setTag(true);
      setOpenAdd(true);
    }
  }, [productQuantity]);

  const handle_remove = () => {
    dispatch(remove_from_cart(product));
  };

  return (
    <div className="card sm:border rounded-sm sm:rounded-xl m-1 flex  flex-col justify-around items-center text-nowrap w-[8.5rem] sm:w-[18rem]  relative p-2">
      {/* Added to cart icon *************** */}

      {tag && (
        <div className=" sm:text-2xl text-[#1f9238] sm:p-1 rounded-full  absolute top-9 right-3 sm:top-20 sm:right-6 ">
          <img src={MyBag} alt="" />
        </div>
      )}
      {/* Heart *************** */}
      <button
        onClick={() => handleFavorites()}
        className="card-heart sm:bg-[#edede9] absolute p-0 sm:p-2 top-3 sm:top-10 right-3 sm:right-6 rounded-full text-center"
      >
        {isFavorite ? (
          <span className="heart">
            <svg
              width="1.1rem"
              height="1.1rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                fill="currentColor"
              />
            </svg>
          </span>
        ) : (
          <span className="heart">
            <svg
              width="1.1rem"
              height="1.1rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                fill="currentColor"
              />
            </svg>
          </span>
        )}
      </button>

      <img
        onClick={() =>
          navigate(`/product/${product.title}`, { state: { product } })
        }
        className=" w-full sm:w-[70%] h-36 sm:h-auto object-cover rounded-lg"
        src={product.thumbnail}
        alt="product image"
        loading="lazy"
      />
      {/* Title & Shipping info *************** */}
      <div className="flex flex-col w-full  sm:my-1">
        <h3
          onClick={() =>
            navigate(`/product/${product.title}`, { state: { product } })
          }
          className="text-xs font-bold sm:font-extrabold sm:text-lg text-center text-wrap"
        >
          {product.title}
        </h3>

        {/* Tags *************** */}
        {product.tags ? (
          <div className="flex justify-center flex-wrap mx-auto items-center gap-1 sm:gap-3 my-1 sm:my-3">
            <h2 className=" text-[#352f2f] font-semibold sm:font-bold ">
              tags:
            </h2>

            <div className="flex text-wrap text-center gap-2 flex-wrap justify-center">
              <span className="tag tag1 p-1 sm:p-2 sm:rounded-full rounded-sm">
                {product.tags[0]}
              </span>
              <span className="tag tag2 p-1 sm:p-2 rounded-sm sm:rounded-full">
                {product.tags[1] ? product.tags[1] : product.category}
              </span>
            </div>
          </div>
        ) : (
          <span></span>
        )}

        <p className="text-xs text-[#504e4e] text-wrap text-center">
          {product.warrantyInformation}
        </p>
      </div>

      {/* Price *************** */}

      <div className="flex w-full items-center justify-around">
        <h3 className="sm:text-xl font-bold text-start">${product.price}</h3>
        {openAdd ? (
          <div
            id="cart-btns"
            className="flex mx-1 sm:mx-0 items-center justify-center sm:flex-row card-btn rounded-sm sm:my-3  sm:rounded-full sm:font-semibold sm:px-2  "
          >
            <button
              onClick={() => handle_remove()}
              className="card-btn-i cursor-pointer p-1  sm:p-2 "
            >
              <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </button>
            <span className="card-btn-i h-full  p-1  sm:p-2">
              {productQuantity}
            </span>
            <button
              onClick={() => dispatch(add_to_cart(product))}
              className="card-btn-i cursor-pointer  p-1  sm:p-2 "
            >
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <button
              id="add-btn"
              onClick={() => handle_add()}
              className="card-btn hidden sm:flex p-2 px-6 rounded-full font-semibold sm:my-3"
            >
              add to cart
            </button>
            <button
              onClick={() => handle_add()}
              className="flex sm:hidden text-2xl  text-[#13c038] hover:text-[#26502f] cursor-pointer"
            >
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7502 8.99999C13.7502 8.58578 13.4144 8.24999 13.0002 8.24999C12.586 8.24999 12.2502 8.58578 12.2502 8.99999V10.25H11.0002C10.586 10.25 10.2502 10.5858 10.2502 11C10.2502 11.4142 10.586 11.75 11.0002 11.75H12.2502V13C12.2502 13.4142 12.586 13.75 13.0002 13.75C13.4144 13.75 13.7502 13.4142 13.7502 13V11.75H15.0002C15.4144 11.75 15.7502 11.4142 15.7502 11C15.7502 10.5858 15.4144 10.25 15.0002 10.25H13.7502V8.99999Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M1.29266 2.75123C1.43005 2.36047 1.8582 2.15506 2.24896 2.29245L2.55036 2.39841C3.16689 2.61514 3.69052 2.79922 4.10261 3.00142C4.54324 3.21762 4.92109 3.48396 5.20527 3.89982C5.48725 4.31246 5.60367 4.76518 5.6574 5.26156C5.66124 5.29709 5.6648 5.33324 5.66809 5.36999L17.1203 5.36999C17.9389 5.36998 18.7735 5.36997 19.4606 5.44677C19.8103 5.48587 20.1569 5.54817 20.4634 5.65586C20.7639 5.76144 21.0942 5.93435 21.3292 6.23977C21.711 6.73616 21.7777 7.31417 21.7416 7.90037C21.7071 8.45848 21.5686 9.15237 21.4039 9.97726L21.3935 10.0295L21.3925 10.0341L20.8836 12.5034C20.7339 13.2298 20.6079 13.841 20.4455 14.3232C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1227 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2599 4.20828 11.2125 4.20828 9.75999V7.03835C4.20828 6.2984 4.20726 5.80319 4.16611 5.42298C4.12678 5.05963 4.05708 4.87821 3.96682 4.74612C3.87876 4.61726 3.74509 4.49683 3.44186 4.34805C3.11902 4.18964 2.68026 4.03409 2.01266 3.79937L1.75145 3.70754C1.36068 3.57015 1.15527 3.142 1.29266 2.75123ZM5.70828 6.86999L5.70828 9.75999C5.70828 11.249 5.72628 12.1578 5.83744 12.8069C5.93933 13.4018 6.11202 13.7325 6.43219 14.0701C6.70473 14.3576 7.08235 14.5418 7.79716 14.6432C8.53783 14.7482 9.5209 14.75 10.9377 14.75H16.2406C17.0399 14.75 17.5714 14.7487 17.9746 14.6993C18.3573 14.6525 18.5348 14.571 18.66 14.469C18.7853 14.3669 18.9009 14.2095 19.024 13.8441C19.1537 13.4593 19.2623 12.9389 19.4237 12.1561L19.9225 9.73594L19.9229 9.73372C20.1005 8.84379 20.217 8.25153 20.2444 7.80796C20.2704 7.38651 20.2043 7.2393 20.1429 7.1579C20.1367 7.15262 20.0931 7.11568 19.9661 7.07104C19.8107 7.01642 19.5895 6.97052 19.2939 6.93748C18.6991 6.87099 17.9454 6.86999 17.089 6.86999H5.70828Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.2502 19.5C5.2502 20.7426 6.25756 21.75 7.5002 21.75C8.74285 21.75 9.7502 20.7426 9.7502 19.5C9.7502 18.2573 8.74285 17.25 7.5002 17.25C6.25756 17.25 5.2502 18.2573 5.2502 19.5ZM7.5002 20.25C7.08599 20.25 6.7502 19.9142 6.7502 19.5C6.7502 19.0858 7.08599 18.75 7.5002 18.75C7.91442 18.75 8.2502 19.0858 8.2502 19.5C8.2502 19.9142 7.91442 20.25 7.5002 20.25Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.2502 19.5001C14.2502 20.7427 15.2576 21.7501 16.5002 21.7501C17.7428 21.7501 18.7502 20.7427 18.7502 19.5001C18.7502 18.2574 17.7428 17.2501 16.5002 17.2501C15.2576 17.2501 14.2502 18.2574 14.2502 19.5001ZM16.5002 20.2501C16.086 20.2501 15.7502 19.9143 15.7502 19.5001C15.7502 19.0859 16.086 18.7501 16.5002 18.7501C16.9144 18.7501 17.2502 19.0859 17.2502 19.5001C17.2502 19.9143 16.9144 20.2501 16.5002 20.2501Z" fill="currentColor"/>
</svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
