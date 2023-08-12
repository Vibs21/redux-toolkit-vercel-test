import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        removeProduct: (state, action) => {
            console.log('id', action.payload)
            return state.filter(item => item.id !== action.payload)
        }
    }

})

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;