import { createSlice } from "@reduxjs/toolkit";
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState : JSON.parse(localStorage.getItem('favorites')) || [] ,
    reducers: {

      add_to_favorites: function (state,action){
        const existingMovie = state.find(item => item.id === action.payload.id);
        if (!existingMovie) {state.push(action.payload);}
        localStorage.setItem('favorites', JSON.stringify(state));
      },

      remove_from_favorites: function (state,action){
        const newState = state.filter(item => item.id !== action.payload.id);
        localStorage.setItem('favorites', JSON.stringify(newState));
        return newState;
      },
  
    },
  });
export const { add_to_favorites, remove_from_favorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;