import axios from "axios";

export const INSTANCE = axios.create({
    baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const fetchTruckById = async (id) => {
    try {
        const { data } = await INSTANCE.get(`/${id}`);
        return data;
    } catch (error) {
        return error.message;
    }
};
