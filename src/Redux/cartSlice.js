import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartitems')) || [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    add_to_cart: function (state,action){
      
      const i = state.items.findIndex((item)=> item.id === action.payload.id);
      if (i >= 0)
        {state.items[i].pquantity += 1;
        }
        else {
        const qproduct = {...action.payload , pquantity : 1} ;
        state.items.push(qproduct);          
      }

      localStorage.setItem('cartitems', JSON.stringify(state.items));
      },

      remove_from_cart: function (state,action){
        const i = state.items.findIndex((item)=> item.id === action.payload.id);
        if (state.items[i].pquantity > 1) {
          state.items[i].pquantity -= 1;         
        } 
          else {
          state.items = state.items.filter((item) => item.id !== action.payload.id);         
        }
        localStorage.setItem('cartitems', JSON.stringify(state.items))
      },
      remove_item: function(state, action){
        state.items = state.items.filter((item)=> item.id !== action.payload.id);
      }
      

    }
});
export const {add_to_cart, remove_from_cart, remove_item} = cartSlice.actions;
export default cartSlice.reducer;