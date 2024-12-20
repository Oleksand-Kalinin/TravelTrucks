import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const INSTANCE = axios.create({
    baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
    params: {
        limit: 4,
    }
});

export const fetchTrucks = createAsyncThunk(
    'trucks/getTrucks',
    async (searchParams, thunkAPI) => {
        try {

            const { data } = await INSTANCE.get('', {
                params: searchParams,
            });


            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })