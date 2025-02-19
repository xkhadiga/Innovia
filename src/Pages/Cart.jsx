import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Components/Card'
import EmptyCt from './EmptyCt'
import { add_to_cart, remove_from_cart, remove_item, clear_cart } from '../Redux/cartSlice'
import { FaMinus, FaPlus, FaTrashCan, FaCashRegister } from "react-icons/fa6";
import { TbCashRegister } from "react-icons/tb";



function Cart() {
    const handle_subtotal = () => {
        document.getElementById('subtotal').classList.toggle('subtotalon');
    }
    const dispatch = useDispatch();
    const rdxtotal = useSelector(state => state.cart.total)
    const [currentTotal, setCurrentTotal] = useState(0)
    // useEffect(()=> {
    //     setCurrentTotal(rdxtotal);
    // },[rdxtotal])
    const cartItems = useSelector(state => state.cart.items);
    if (cartItems.length === 0) { return <EmptyCt /> }
    else return (
        <>
            <section className='main-section relative flex flex-col justify-center my-3 sm:my-10 rounded-xl p-2 mx-auto w-[95%]'>
                <div className='items-container flex flex-col justify-center items-center p-10'>
                    <h1 className='text-center text-3xl my-8 font-bold'>Shopping Cart</h1>
                    <div className='hidden sm:flex justify-around items-center my-3  w-full  border-b pb-5 font-semibold'>
                        <h3 >PRODUCT</h3>
                        <h3 >PRICE</h3>
                        <h3 >QUANTITY</h3>
                        <h3 >TOTAL</h3>
                    </div>
                    {cartItems.map((product) => (

                        <div
                            className='flex items-center w-full my-3 border-b pb-5 gap-5 border-b-[#939393]'
                            key={product.id} product={product}>
                            <div className='flex-1 flex items-center justify-center'>
                                <img
                                    className='sm:w-[35%]'
                                    src={product.thumbnail} alt="product image" />
                                <div className='hidden text-center sm:flex flex-col items-center justify-center gap-3'>
                                    <h4 className='font-semibold text-lg'>
                                        {product.title}
                                    </h4>
                                    <h4>
                                        {product.shippingInformation}
                                    </h4>
                                    <button
                                        onClick={() => dispatch(remove_item(product))}
                                        className='text-red-700 text-xl cursor-pointer p-2  shadow-sm rounded-lg '>
                                        <FaTrashCan />
                                    </button>
                                </div>
                            </div>
                            <h3 className='flex-1 flex items-center justify-center '>
                                ${product.price}
                            </h3>
                            <div className='flex-1 flex items-center justify-center'>
                                <div id='cart-btns' className=' card-btn2 flex flex-col items-center sm:flex-row p-1 sm:p-2 sm:px-6 font-semibold gap-2 shadow-[#cecbcb] shadow-sm '>
                                    <button
                                        onClick={() => dispatch(remove_from_cart(product))
                                        }
                                        className='cursor-pointer hover:text-[#a34242]' >
                                        <FaMinus />
                                    </button>
                                    <span className='px-2 h-full'>
                                        {product.pquantity}
                                    </span>
                                    <button
                                        onClick={() => dispatch(add_to_cart(product))
                                        }
                                        className=' cursor-pointer hover:text-[#50af5d] '>
                                        <FaPlus />
                                    </button>

                                </div>
                            </div>
                            <h3 className='flex-1 flex items-center justify-center '>${(product.price * product.pquantity).toFixed(2)}</h3>

                        </div>

                    ))}


                </div>

                <div id='subtotal' className='subtotal border fixed flex flex-col items-center justify-center right-5  bottom-5 rounded-lg shadow-sm shadow-[#6e6d6d] z-10'
                >
                    <button className='sub-btn absolute top-0 right-0 text-xl p-2' onClick={() => handle_subtotal()}>
                        <TbCashRegister />
                    </button>
                    <span className='font-semibold text-lg'>
                        ( {cartItems.length} items )
                    </span>
                    <div className=' text-lg flex gap-2 items-center '>
                        <span className='font-bold'>Subtotal:</span>
                        <span>${(rdxtotal).toFixed(2)} </span>
                    </div>
                    <button className='card-btn p-2 rounded-full px-4 my-4'>
                        Proceed to Buy
                    </button>
                </div>
                <div className='flex absolute  bottom-2  w-full items-center justify-between px-10'>
                    <button
                        onClick={() => dispatch(clear_cart())}
                        className=' '>
                        <span className='font-semibold text-xl cursor-pointer p-2 px-4 shadow-[#4e4d4d] shadow-sm rounded-lg'>
                            Clear Items
                        </span>
                    </button>
                    <div className='p-2 flex gap-2 items-center '>
                        <span className='font-bold  text-xl'>Total:</span>
                        <span>
                            ${(rdxtotal).toFixed(2)}
                        </span>
                    </div>
                </div>

            </section>



        </>
    )
}

export default Cart