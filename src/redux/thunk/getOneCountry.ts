import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../api/instance";

export const getOneCountry = createAsyncThunk(
  "getOneCountry",
  async (name: string, thunkApi) => {
    try {
      const response = await api.get(`name/${name}?fullText=true`);
      return response.data[0];
    } catch (e: unknown) {
      thunkApi.rejectWithValue(e);
    }
  }
);
