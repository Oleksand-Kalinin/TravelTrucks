import { trucksReducer } from "./auth/slice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        trucks: trucksReducer,
    },
});