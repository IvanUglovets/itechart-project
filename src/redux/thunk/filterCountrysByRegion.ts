import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../api/instance";

export const filterCountrysByRegion = createAsyncThunk(
    "filterCountrysByRegion",
    async (region: string, thunkApi) => {
        try {
            if (region !== "All"){
                const response = await api.get(`region/${region}`);
                return response.data;
            }else {
                const response = await api.get("all");
                return response.data;
            }
        } catch (e: unknown) {
            thunkApi.rejectWithValue(e);
        }
    }
);
