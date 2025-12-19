import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      
      // On force la conversion en nombre pour être sûr
      const quantityToAdd = Number(newItem.quantity);

      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: quantityToAdd
        });
      }
      
      state.totalQuantity += quantityToAdd;
      state.totalAmount += newItem.price * quantityToAdd;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      const newQty = Number(quantity);
      
      if (item && newQty > 0) {
        const quantityDifference = newQty - item.quantity;
        item.quantity = newQty;
        
        state.totalQuantity += quantityDifference;
        state.totalAmount += quantityDifference * item.price;
      }
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;