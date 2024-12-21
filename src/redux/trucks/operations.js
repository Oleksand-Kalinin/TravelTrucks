import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { calculateTotalPages } from "../../js/calculateTotalPages.js";
import { Bounce, toast } from "react-toastify";

const ITEMS_PER_PAGE = 4;
export const INSTANCE = axios.create({
    baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
    params: {
        page: 1,
        limit: ITEMS_PER_PAGE,
    }
});

export const fetchTrucks = createAsyncThunk(
    'trucks/getTrucks',
    async (searchParams, thunkAPI) => {
        try {
            const { data } = await INSTANCE.get('', {
                params: searchParams,
            });
            const paginationInfo = calculateTotalPages(data.total, ITEMS_PER_PAGE);
            return { ...paginationInfo, ...data };
        } catch (error) {
            if (error.response.status === 404) {
                toast.error(`No trucks were found for these parameters.`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            }
            return thunkAPI.rejectWithValue(error.message);
        }
    })


export const fetchTruckById = createAsyncThunk(
    'trucks/getTruckById',
    async (id, thunkAPI) => {
        try {
            const { data } = await INSTANCE.get(`/${id}`);
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const fetchTrucksNextPage = createAsyncThunk(
    'trucks/getTrucksNextPage',
    async (searchParams, thunkAPI) => {
        try {
            const { data } = await INSTANCE.get('', {
                params: searchParams,
            });
            return data.items;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })