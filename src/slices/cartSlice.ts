import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, AnyAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Product } from '../models/products'
import toast, { Toaster } from 'react-hot-toast';

export interface CartProducts extends Product {
    quantity?: number;
}

interface CartState {
    products: CartProducts[]
}

// Define the initial state using that type
const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProducts>) => {
            const { products } = state;
            const { id, quantity_available } = action.payload;
            const doesExist = products.find((p) => p.id === id);
            const index = products.findIndex((p) => p.id === id);

            if (doesExist && doesExist.quantity! < quantity_available) {
                const { quantity } = doesExist
                doesExist.quantity = quantity! + 1;
                products[index] = doesExist
            }
            if (!doesExist) {
                products.push({ ...action.payload, quantity: 1 })
            }

            if (doesExist?.quantity === quantity_available) {
                toast('Stock  OUt')
            }

        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const filterCartProducts = state.products.filter((item) => item.id !== action.payload)
            state.products = filterCartProducts
        }


    },
})

export const { addToCart, removeFromCart } = cartSlice.actions


export const cartProducts = (state: RootState) => state.cart.products;

export default cartSlice.reducer