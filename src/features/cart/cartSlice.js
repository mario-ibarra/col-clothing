import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount:0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartTotal: (state, action) => {
      state.cartTotal = action.payload;
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
  },
});


export const { setCartItems, setIsCartOpen, setCartCount, setCartTotal } = cartSlice.actions;

export default cartSlice.reducer;