import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../Redux/cartSlice';
import { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { add_to_favorites, remove_from_favorites } from '../Redux/favoritesSlice';
import { toast } from 'react-toastify';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

function Item() {
    // product
    const { productName } = useParams();
    const location = useLocation();
    const product = location.state?.product;

    // add to favorites 
    const favorites = useSelector(state => state.favorites);
    const isFavorite = favorites.some(item => item.id === product.id)
    const handleFavorites = () => {
        if (isFavorite) {
            dispatch(remove_from_favorites(product));
        } else {
            dispatch(add_to_favorites(product));
        }
    };


    // add to cart 
    const dispatch = useDispatch();
    const cart_items = useSelector(state => state.cart.items)
    const cartItem = cart_items.find(item => item.id === product.id);
    const productQuantity = cartItem ? cartItem.pquantity : 0;
    const [openAdd, setOpenAdd] = useState(false);

    const handle_add = () => {
        dispatch(add_to_cart(product));
        setOpenAdd(true);
        toast.success(`Added ${product.title} to your cart`, { position: "bottom-left", autoClose: 2000 });

    };

    useEffect(() => {
        if (productQuantity === 0) {
            setOpenAdd(false);

        }
        else {
            setOpenAdd(true);
        }
    }, [productQuantity]);

    const handle_remove = () => {
        dispatch(remove_from_cart(product))
    };


    return (
        <div className='bg-[rgba(170,170,170,0.5)] py-10 backdrop-blur-lg '>
            <section className='main-section  relative flex flex-col sm:flex-row justify-center  my-3 sm:my-5 rounded-xl p-2 mx-auto w-[85%] shadow-sm shadow-[#b3a9a9] gap-2'>
                {/*  Image *******************  */}
                <div className=' bg-white rounded-xl  border border-[#b7dad4] flex flex-1 justify-center items-center'>
                    <img
                        className=' rounded-lg flex w-full h-fit'
                        src={product.thumbnail} alt="product image" />
                </div>
                <div className='flex flex-col text-center rounded-2xl  h-full w-full p-3 sm:p-10 border border-[#b7dad4]  flex-1'>
                    {/* *Title & Description  ******************* * */}
                    <h1 className='font-bold text-5xl mt-10'>
                        {product.title}
                    </h1>
                    <p className='text-xl font-medium my-6 sm:my-10'>
                        {product.description}
                    </p>
                    <div className='flex flex-col w-[70%] mx-auto gap-3   '>
                        {/* Tags ******************* * */}
                        <div className='flex flex-wrap  items-center gap-3 pb-2 border-b border-b-[#b7dad4] text-left'>
                            <h3 className='font-bold'>Tags:</h3>
                            <div className='flex gap-2 flex-wrap justify-center'>
                                <span className='tag tag-w p-2 rounded-full'>
                                    {product.tags[0]}
                                </span>
                                <span className='tag tag-w p-2 rounded-full'>
                                    {product.tags[1] ? product.tags[1] : product.category}
                                </span>
                                {product.tags[2] ?
                                <span className='tag tag-w p-2 rounded-full'>
                                     product.tags[2]  
                                </span> 
                                :
                                <span className='flex-none'></span>}
                            </div>
                        </div>
                        {/* Category *******************  */}
                        <div className='flex flex-wrap  items-center gap-3 pb-2 border-b border-b-[#b7dad4] '>
                            <h3 className='font-bold'>Category:</h3>
                            <div className='flex justify-center'>
                                <span className='tag tag-w p-2 rounded-full'>
                                    {product.category}
                                </span>
                            </div>
                        </div>
                        {/* return Policy *******************  */}
                        <div className='flex flex-wrap  items-center gap-3 pb-2 border-b border-b-[#b7dad4] '>
                            <h3 className='font-bold'>Return Policy :</h3>
                            <div className='flex justify-center'>
                                <span className='tag tag-w p-2 rounded-full'>
                                    {product.returnPolicy}
                                </span>
                            </div>
                        </div>
                        {/* Brand *******************  */}
                        {product.brand ?
                            <div className='flex flex-wrap  items-center gap-3 pb-2 border-b border-b-[#b7dad4] '>
                                <h3 className='font-bold'>Brand :</h3>
                                <div className='flex justify-center'>
                                    <span className='tag tag-w p-2 rounded-full'>
                                        {product.brand}
                                    </span>
                                </div>
                            </div>
                            :
                            ''
                             }

                        {/* Stock *******************  */}
                        <div className='flex flex-wrap  items-center gap-3 '>
                            <h3 className='font-bold'>Stock:</h3>
                            <div className='flex justify-center'>
                                <span className='tag tag-w p-2 rounded-full'>
                                    {product.stock}
                                </span>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <s className='text-xl font-semibold text-start text-gray-500'>
                                {`$ ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}`}
                            </s>
                            <h3 className='text-4xl font-bold '>
                                ${product.price}
                            </h3>
                        </div>

                    </div>
                    {/* Buttons  ADD & FAV */}
                    <div className='flex mb-10 w-[40%] mx-auto gap-1 justify-center '>
                        {openAdd ?
                            (<div id='cart-btns' className='flex bg-white color-black shadow-sm  rounded-lg font-semibold px-2 flex-1 justify-evenly '>
                                <button onClick={() => handle_remove()}
                                    className='card-btn-i cursor-pointer  p-2 '
                                >
                                    <FaMinus />
                                </button>
                                <span className='card-btn-i h-full  p-2'>
                                    {productQuantity}
                                </span>
                                <button
                                    onClick={() => dispatch(add_to_cart(product))}
                                    className='card-btn-i cursor-pointer  p-2 '
                                >
                                    <FaPlus />
                                </button>
                            </div>)
                            :
                            (<button
                                id='add-btn'
                                onClick={() => handle_add()}
                                className='bg-[#81e4dc] hover:bg-[#aaf0ea] color-black shadow-sm flex p-2 px-6 flex-1 justify-center font-semibold rounded-lg'>
                                add to cart
                            </button>)
                        }
                        {/* Heart Button */}
                        <button
                            onClick={() => handleFavorites()}
                            className='bg-white  shadow-sm p-2 rounded-lg text-center'>
                            {isFavorite ?
                                <span className='heart'><FaHeart /></span>

                                :
                                <span className='heart'><FaRegHeart /></span>
                            }

                        </button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Item