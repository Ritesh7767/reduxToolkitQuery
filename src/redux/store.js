import { configureStore } from "@reduxjs/toolkit";
import DataProvider from "./DataSlice";
import { productApi } from "../services/productApi";

const store = configureStore({
    reducer : {
        [productApi.reducerPath] : productApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

export default store