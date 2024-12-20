import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations.js";

export const INITIAL_STATE = {
    trucks: {
        items: [],
    },
    error: null,
    isLoading: false,
};

const trucksSlice = createSlice({
    name: "trucks",
    initialState: INITIAL_STATE,
    reducers: {
        resetError(state) {
            state.error = null;
        },
    },

    extraReducers(builder) {

        builder
            .addCase(fetchTrucks.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchTrucks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.trucks = { ...state.trucks, ...action.payload.dataInfo };
                state.trucks.items = [...state.trucks.items, ...action.payload.items];
            })
            .addCase(fetchTrucks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    },
});

export const { resetError } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
