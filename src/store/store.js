// if you are not abel to rember the exact name of the function of the library then just first import lib like
//  import {} from '@reduxjs/toolkit

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const store = configureStore({
    reducer: {
        product: productReducer
    }
})