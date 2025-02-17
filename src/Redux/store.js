import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './favoritesSlice'
import cartSlice from './cartSlice'
 const store = configureStore({
    reducer:{
        favorites: favoritesSlice,
        cart: cartSlice,
    },
})

export default store