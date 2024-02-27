import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/product-reducer";
import { add, remove, toggleAmount, totalPrice } from "./reducers/product-reducer";

const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
    matcher: isAnyOf(add, remove, toggleAmount),
    effect:(_,api)=>{
        api.dispatch(totalPrice());
    }
})


export const store = configureStore({
    reducer:{
        product: productReducer,
    },
    middleware:(defaultMiddleware)=> defaultMiddleware().prepend(storageMiddleware.middleware),
})