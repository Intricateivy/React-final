import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },

  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const exsistingItem = state.items.find(item => item.name === name);
        if (exsistingItem) {
            exsistingItem.quantity += 1;
        } else {
            state.items.push({name, image, cost, quantity: 1});
        }
    },
    
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
