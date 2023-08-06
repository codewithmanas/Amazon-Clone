import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Actions
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state,) => {
            state.items = state.items.pop();
        },
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors, Alternative way
export const selectItems = (state) => {
    return state.cart.items;
}

export default cartSlice.reducer;