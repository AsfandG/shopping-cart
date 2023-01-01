import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const itemExist = state.cartItems.find((item) => item.id === product.id);
      if (itemExist) {
        state.cartItems.forEach((item) => {
          if (item.id === product.id) {
            item.quantity += 1;
          }
        });
      } else {
        state.cartItems.push(product);
      }
    },
    increment: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrement: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem.quantity > 1) cartItem.quantity -= 1;
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTotal: (state, action) => {
      let sum = 0;
      state.cartItems.forEach((item) => {
        return (sum += item.price * item.quantity);
      });
      state.subtotal = sum;
      state.tax = +(state.subtotal * 0.18).toFixed();
      state.shipping = state.subtotal < 1000 ? 0 : 400;
      state.total = state.subtotal + state.tax + state.shipping;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  deleteItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
