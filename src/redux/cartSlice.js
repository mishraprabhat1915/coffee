// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === itemInCart.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item)
                }
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        action.payload
                    ]
                }
            }
        },
        incrementQuantity: (state, action) => {
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item)
            }
        },
        decrementQuantity: (state, action) => {
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {
                    ...item,
                    quantity: item.quantity === 0 ? item.quantity : item.quantity - 1
                } : item)
            }
        },
        removeItem: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;