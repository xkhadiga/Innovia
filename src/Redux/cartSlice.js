import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartitems')) || [],
  total: JSON.parse(localStorage.getItem('cartitems')) ?
      JSON.parse(localStorage.getItem('cartitems')).reduce((init, item) => init + item.price * item.pquantity, 0 ) :
  0,
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
      state.total = state.items.reduce((init,item)=> init + item.price* item.pquantity, 0)
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
        state.total = state.items.reduce((init,item)=> init + item.price * item.pquantity , 0);
        localStorage.setItem('cartitems', JSON.stringify(state.items))
      },
      remove_item: function(state, action){
        state.items = state.items.filter((item)=> item.id !== action.payload.id);
        state.total = state.items.reduce((init,item)=> init + item.price * item.pquantity , 0)
        localStorage.setItem('cartitems', JSON.stringify(state.items));
      },
      clear_cart: function(state, action){
        state.items = [];
        state.total = 0;
        localStorage.setItem('cartitems', JSON.stringify(state.items));
      },

    }
});
export const {add_to_cart, remove_from_cart, remove_item, clear_cart} = cartSlice.actions;
export default cartSlice.reducer;