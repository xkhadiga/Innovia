import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Components/Card";
import EmptyCt from "./EmptyCt";
import {
  add_to_cart,
  remove_from_cart,
  remove_item,
  clear_cart,
} from "../Redux/cartSlice";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import { TbCashRegister } from "react-icons/tb";
import Payment from "../Components/Payment";

function Cart() {
  const handle_subtotal = () => {
    document.getElementById("subtotal").classList.toggle("subtotalon");
  };
  const dispatch = useDispatch();
  const rdxtotal = useSelector((state) => state.cart.total);
  const [currentTotal, setCurrentTotal] = useState(0);

  const [openPayment, setOpenPayment] = useState(false);
  const handlePayment = () => {
    setOpenPayment(true);
  };
  const cartItems = useSelector((state) => state.cart.items);
  if (cartItems.length === 0) {
    return <EmptyCt />;
  } else
    return (
      <>
        {openPayment && (
          <div
            onClick={() => setOpenPayment(false)}
            className="fixed top-0 left-0 w-full h-full bg-[rgb(0,0,0,.5)]  z-50 flex items-center justify-center "
          >
            <div
              className="items-center flex justify-center "
              onClick={(e) => e.stopPropagation()}
            >
              <Payment />
            </div>
          </div>
        )}
        <section className="main-section relative flex flex-col justify-center my-3 sm:my-10 rounded-xl p-2 mx-auto w-[90%]">
          <div className="items-container flex flex-col justify-center items-center p-10">
            <h1 className="text-center text-nowrap text-3xl my-8 font-bold">
              Shopping Cart
            </h1>
            <div className="hidden sm:flex items-center w-full my-3 border-b  justify-around   pb-5 gap-5">
              <div className="flex-1 flex items-center justify-center flex-col sm:flex-row">
                <h3>PRODUCT</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-5  flex-1 justify-around">
                <h3>PRICE</h3>
                <h3>QUANTITY</h3>
                <h3>TOTAL</h3>
              </div>
            </div>
            {cartItems.map((product) => (
              <div
                key={product.id}
                product={product}
                className="flex flex-col  w-full  "
              >
                {/* Justify product info in small screens */}
                {/* Small Screens Image & Delete Product */}
                <div className="flex flex-row-reverse items-center justify-center">
                  <img
                    className="flex sm:hidden sm:w-[85%]"
                    src={product.thumbnail}
                    alt="product image"
                  />
                  <button
                    onClick={() => dispatch(remove_item(product))}
                    className="flex sm:hidden text-red-700 text-sm cursor-pointer p-2  shadow-sm shadow-[#0c0c0c] rounded-lg self-start my-5"
                  >
                    <FaTrashCan />
                  </button>
                </div>

                {/* Small Screens  Name & Shipping */}

                <div className="text-center flex flex-col items-center justify-center gap-3">
                  <h4 className="flex sm:hidden justify-center items-center font-bold text-lg ">
                    {product.title}
                  </h4>
                  <h4 className="flex sm:hidden justify-center items-center ">
                    {product.shippingInformation}
                  </h4>
                </div>
                
                {/* Full Product ********* */}
                <div className="flex items-center w-full my-3 border-b justify-center sm:justify-around pb-5 gap-5 border-b-[#939393]">
                    {/* Image - Name - Shipping - Remove */}
                  <div className="flex-1  hidden sm:flex items-center flex-col justify-around sm:flex-row">
                    <img
                      className="hidden sm:flex sm:w-[35%]"
                      src={product.thumbnail}
                      alt="product image"
                    />

                    <div className="text-center flex flex-col items-center justify-center gap-3">
                      <h4 className="hidden sm:flex font-bold sm:text-lg text-sm">
                        {product.title}
                      </h4>
                      <h4 className="hidden sm:flex ">
                        {product.shippingInformation}
                      </h4>
                      <button
                    onClick={() => dispatch(remove_item(product))}
                    className="hidden sm:flex text-red-700 text-xl cursor-pointer p-2  shadow-sm rounded-lg "
                  >
                    <FaTrashCan />
                  </button>
                    </div>
                  </div>

                  {/* Price - Quantity - Total ******* */}
                  <div className="flex items-center justify-center gap-10 sm:gap-5 sm:flex-1">
                    <h3 className="flex-1 flex-col  sm:flex-row flex items-center justify-center gap-2">
                      <span className="sm:hidden font-bold">price: </span>$
                      {product.price}
                    </h3>
                    <div className="flex-1 flex items-center justify-center">
                      <div
                        id="cart-btns"
                        className=" card-btn2 flex items-center p-1 sm:p-2 sm:px-6 font-semibold gap-2  "
                      >
                        <button
                          onClick={() => dispatch(remove_from_cart(product))}
                          className="cursor-pointer hover:text-[#a34242]"
                        >
                          <FaMinus />
                        </button>
                        <span className="px-2 h-full">{product.pquantity}</span>
                        <button
                          onClick={() => dispatch(add_to_cart(product))}
                          className=" cursor-pointer hover:text-[#50af5d] "
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <h3 className="flex-1 flex-col sm:flex-row flex items-center justify-center gap-1">
                      <span className="sm:hidden font-bold">total: </span>$
                      {(product.price * product.pquantity).toFixed(2)}
                    </h3>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div
            id="subtotal"
            className="subtotal border fixed flex flex-col items-center justify-center sm:right-5  bottom-15 sm:bottom-10 rounded-lg shadow-sm shadow-[#6e6d6d] z-10"
          >
            <button
              className="sub-btn absolute top-0 right-0 text-xl p-2"
              onClick={() => handle_subtotal()}
            >
              <TbCashRegister />
            </button>
            <span className="font-semibold text-lg">
              ( {cartItems.length} items )
            </span>
            <div className=" text-lg flex gap-2 items-center ">
              <span className="font-bold">Subtotal:</span>
              <span>${rdxtotal.toFixed(2)} </span>
            </div>
            <button
              onClick={() => handlePayment()}
              className="card-btn p-2 rounded-full px-4 my-4"
            >
              Proceed to Buy
            </button>
          </div>
          <div className="flex absolute bottom-2  w-full items-center justify-between px-10 flex-row-reverse sm:flex-row ">
            <button onClick={() => dispatch(clear_cart())} className=" ">
              <span className="clear-items-btn font-semibold text-nowrap sm:text-xl cursor-pointer p-2 sm:p-2 sm:px-4 shadow-sm rounded-lg ">
                Clear Items
              </span>
            </button>
            <div className="total-span p-2 flex gap-2 items-center ">
              <span className="font-bold  text-xl">Total:</span>
              <span>${rdxtotal.toFixed(2)}</span>
            </div>
          </div>
        </section>
      </>
    );
}

export default Cart;
