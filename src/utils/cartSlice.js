import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items:[],
    },
    reducers : {
        addItem : (state, action)=>{
            // Vanila Redux ( Dont mutate the State, returning was Mandatory)
            // Const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux Toolkit
            // mutating the state here 
            // Redux toolkit uses Immer BTS
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) =>{
            state.items.length=0;
        },
    },
});

export const{addItem,removeItem,clearCart} =cartSlice.actions;

export default cartSlice.reducer;