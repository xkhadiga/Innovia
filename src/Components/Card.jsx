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
    className="card border rounded-xl m-2 flex flex-col justify-around items-center text-nowrap w-[15rem] sm:w-[20rem]  relative  p-2">
        {tag && (
            <div className='text-2xl text-[#1f9238] p-1 rounded-full absolute top-20 right-7 '>
                <TbShoppingBagCheck />
            </div>
            
        )}
        {/* Heart *************** */}
        <button
            onClick={() => handleFavorites()}
            className='card-heart absolute p-2 top-10 right-7 rounded-full text-center'>
            {isFavorite ?
                <span className='heart'><FaHeart /></span>

                :
                <span className='heart'><FaRegHeart /></span>
            }

        </button>

        <img onClick={()=> navigate(`/product/${product.title}`, { state: {product} })}
        className=' w-[50%] sm:w-full sm:h-auto object-cover rounded-lg' src={product.thumbnail} alt="product image" />
        {/* Title & Shipping info *************** */}
        <div className='flex flex-col w-full my-2'>
            <h3 
            onClick={()=> navigate(`/product/${product.title}`, { state: {product} })}
            className='font-extrabold sm:text-lg text-center text-wrap'>{product.title}</h3>

            {/* Tags *************** */}
                {product.tags ? (
                                <div className='flex justify-center flex-wrap mx-auto items-center gap-3 my-3'>
            <h3 className='font-bold'>tags:</h3>

                                <div className='flex gap-2 flex-wrap justify-center'>
                                    <span className='tag tag1 p-2 rounded-full'>
                                        {product.tags[0]}
                                    </span>
                                    <span className='tag tag2 p-2 rounded-full'>
                                        {product.tags[1] ? product.tags[1] : product.category}
                                    </span>
                                </div>
                            </div>
                ) :
                (
                    <span></span>
                )}

            <p className='text-wrap text-center'>{product.warrantyInformation}</p>
        </div>

        {/* Price *************** */}

        <div className='flex w-full items-center justify-around my-2'>
            <h3 className='text-xl font-bold text-start'>${product.price}</h3>
            { openAdd ?
                (<div id='cart-btns' className='flex card-btn  rounded-full font-semibold px-2  '>
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
                (
                    <>
                <button
                    id='add-btn'
                    onClick={() => handle_add()}
                    className='card-btn hidden sm:flex p-2 px-6 rounded-full font-semibold'>
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