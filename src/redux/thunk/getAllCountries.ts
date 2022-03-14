import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/instance";

export const getAllCountries = createAsyncThunk(
  "getAllCountries",
  async (_, thunkApi) => {
    try {
      const response = await api.get("all");
      return response.data;
    } catch (e: unknown) {
      thunkApi.rejectWithValue(e);
    }
  }
);
