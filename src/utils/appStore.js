import { configureStore }from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

//Store 
const appStore = configureStore({
    reducer : {
        cart : cartReducer,
    },
});

export default appStore;