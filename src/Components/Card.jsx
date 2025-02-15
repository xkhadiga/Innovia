import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { add_to_favorites, remove_from_favorites } from '../Redux/favoritesSlice';
import { useDispatch , useSelector} from 'react-redux';

function Card( {product} ) {
const dispatch = useDispatch();
const favorites = useSelector(state => state.favorites);
const isFavorite = favorites.some(item => item.id === product.id)
const handleFavorites=()=>{
    if(isFavorite){
        dispatch(remove_from_favorites(product));
    } else{
        dispatch(add_to_favorites(product));
    }
};

  return (
    <div className="card border rounded-xl m-2 flex flex-col justify-around text-nowrap w-[20rem]  relative  p-2">
            {/* Heart *************** */}

            <button 
            onClick={()=> handleFavorites()}
            className='card-heart absolute p-2 top-10 right-7 rounded-full text-center'>
                <span className='heart'><FaRegHeart /></span>

            </button>
       
        <img className='w-full h-auto object-cover rounded-lg' src={product.thumbnail} alt="product image" />
    {/* Title & Shipping info */}
        <div className='flex flex-col w-full my-2'>
            <h3 className='font-extrabold text-lg text-center'>{product.title}</h3>

    {/* Tags *************** */}
            <div className='flex flex-wrap mx-auto items-center gap-3 my-3'>
            <h3 className='font-bold'>tags:</h3>
            {/* <div className='flex gap-2 flex-wrap justify-center'>
                <span className='tag tag1 p-2 rounded-full'>
                {product.tags[0]}
                </span>
                <span className='tag tag2 p-2 rounded-full'>
                {product.tags[1] ? product.tags[1]: product.category}
                </span>                 
                </div> */}
        </div>
            <p className='text-wrap text-center'>{product.shippingInformation}</p>
        </div>

    {/* Price *************** */}
    
        <div className='flex w-full items-center justify-around my-2'>
        <h3 className='text-xl font-bold text-start'>${product.price}</h3>
        <button className='card-btn p-2 px-6 rounded-full font-semibold'>add to cart</button>
        </div>

    </div>
  )
}

export default Card