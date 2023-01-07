import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Product } from "../models/products";
import type { RootState } from "../store";

export interface CartProducts extends Product {
    quantity?: number;
}

interface CartState {
    products: CartProducts[];
}

// Define the initial state using that type
const initialState: CartState = {
    products: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProducts>) => {
            const { products } = state;
            const { id, quantity_available } = action.payload;
            const doesExist = products.find((p) => p.id === id);
            const index = products.findIndex((p) => p.id === id);

            if (doesExist?.quantity === quantity_available) {
                toast.error("This item is out of stock");
            }

            if (doesExist && doesExist.quantity! < quantity_available) {
                const { quantity } = doesExist;
                doesExist.quantity = quantity! + 1;
                products[index] = doesExist;
                toast.success("Item added successfully");
            }
            if (!doesExist) {
                products.push({ ...action.payload, quantity: 1 });
                toast.success("Item added successfully");
            }
        },

        quantityIncrement: (state, action: PayloadAction<{ id: number }>) => {
            const { products } = state;
            const { id } = action.payload;
            const item = products.find((p) => p.id === id)!;

            if (item.quantity! === item.quantity_available) {
                toast.error("This item is out of stock");
                return;
            }
            if (item?.quantity! < item.quantity_available) {
                item.quantity = item.quantity! + 1;
            }
        },
        quantityDecrement: (state, action: PayloadAction<{ id: number }>) => {
            const { products } = state;
            const { id } = action.payload;
            const item = products.find((p) => p.id === id)!;

            if (item.quantity! === 1) {
                toast.error("Quantity cant be zero");
                return;
            }

            item.quantity = item.quantity! - 1;
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const filterCartProducts = state.products.filter(
                (item) => item.id !== action.payload
            );
            state.products = filterCartProducts;
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    quantityIncrement,
    quantityDecrement
} = cartSlice.actions;

export const cartProducts = (state: RootState) => state.cart.products;

export default cartSlice.reducer;
