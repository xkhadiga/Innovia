import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { add_to_favorites, remove_from_favorites } from '../Redux/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../Redux/cartSlice';
import { toast } from 'react-toastify';
import { FaMinus , FaPlus, FaCartPlus} from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';







function Card({ product }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const isFavorite = favorites.some(item => item.id === product.id)
    const handleFavorites = () => {
        if (isFavorite) {
            dispatch(remove_from_favorites(product));
        } else {
            dispatch(add_to_favorites(product));
        }
    };

    /* ADD to Cart Button */
    const cart_items = useSelector(state => state.cart.items)
    const cartItem = cart_items.find(item => item.id === product.id);
    const productQuantity = cartItem ? cartItem.pquantity : 0;
    const [tag, setTag]= useState(false);
    const [openAdd, setOpenAdd] = useState(false);


    const handle_add = () => {
        dispatch(add_to_cart(product));
        setOpenAdd(true);
        toast.success( `Added ${product.title} to your cart`, { position: "bottom-left", autoClose: 2000 });

    };

    useEffect(() => {
        if (productQuantity === 0) {
            setOpenAdd(false);
            setTag(false);

        }
        else {
            setTag(true);
            setOpenAdd(true);
        }
    }, [productQuantity]);
    
    const handle_remove = () => {
        dispatch(remove_from_cart(product))
    };


return (
    <div     
    className="card sm:border rounded-sm sm:rounded-xl m-1 flex  flex-col justify-around items-center text-nowrap w-[8.5rem] sm:w-[18rem]  relative p-2">
                {/* Added to cart icon *************** */}

        {tag && (
            <div className=' sm:text-2xl text-[#1f9238] sm:p-1 rounded-full text-center absolute top-9 right-3 sm:top-20 sm:right-7 '>
                <TbShoppingBagCheck />
            </div>
            
        )}
        {/* Heart *************** */}
        <button
            onClick={() => handleFavorites()}
            className='card-heart sm:bg-[#edede9] absolute p-0 sm:p-2 top-3 sm:top-10 right-3 sm:right-7 rounded-full text-center'>
            {isFavorite ?
                <span className='heart'><FaHeart /></span>

                :
                <span className='heart'><FaRegHeart /></span>
            }

        </button>

        <img onClick={()=> navigate(`/product/${product.title}`, { state: {product} })}
        className=' w-full sm:w-[70%] h-36 sm:h-auto object-cover rounded-lg' src={product.thumbnail} alt="product image" />
        {/* Title & Shipping info *************** */}
        <div className='flex flex-col w-full  sm:my-1'>
            <h3 
            onClick={()=> navigate(`/product/${product.title}`, { state: {product} })}
            className='text-xs font-bold sm:font-extrabold sm:text-lg text-center text-wrap'>{product.title}</h3>

            {/* Tags *************** */}
                {product.tags ? (
                                <div className='flex justify-center flex-wrap mx-auto items-center gap-1 sm:gap-3 my-1 sm:my-3'>
            <h2 className=' text-[#352f2f] font-semibold sm:font-bold '>tags:</h2>

                                <div className='flex text-wrap text-center gap-2 flex-wrap justify-center'>
                                    <span className='tag tag1 p-1 sm:p-2 sm:rounded-full rounded-sm'>
                                        {product.tags[0]}
                                    </span>
                                    <span className='tag tag2 p-1 sm:p-2 rounded-sm sm:rounded-full'>
                                        {product.tags[1] ? product.tags[1] : product.category}
                                    </span>
                                </div>
                            </div>
                ) :
                (
                    <span></span>
                )}

            <p className='text-xs text-[#504e4e] text-wrap text-center'>{product.warrantyInformation}</p>
        </div>

        {/* Price *************** */}

        <div className='flex w-full items-center justify-around'>
            <h3 className='sm:text-xl font-bold text-start'>${product.price}</h3>
            { openAdd ?
                (<div id='cart-btns' className='flex mx-1 sm:mx-0 items-center justify-center sm:flex-row card-btn rounded-sm sm:my-3  sm:rounded-full sm:font-semibold sm:px-2  '>
                    <button onClick={() => handle_remove()}
                        className='card-btn-i cursor-pointer p-1  sm:p-2 '
                        >
                        <FaMinus />
                    </button>
                    <span className='card-btn-i h-full  p-1  sm:p-2'>
                        {productQuantity}
                    </span>
                    <button
                        onClick={() => dispatch(add_to_cart(product))}
                        className='card-btn-i cursor-pointer  p-1  sm:p-2 '
                    >
                        <FaPlus />
                    </button>
                </div>)
                :
                (
                    <>
                <button
                    id='add-btn'
                    onClick={() => handle_add()}
                    className='card-btn hidden sm:flex p-2 px-6 rounded-full font-semibold sm:my-3'>
                        add to cart
                </button>
                <button 
                onClick={() => handle_add()}
                className='flex sm:hidden text-2xl  text-[#13c038] hover:text-[#26502f] cursor-pointer'>
                            <FaCartPlus /> 
                            </button>
                </>
                )
            }

        </div>

    </div>
)
}

export default Card