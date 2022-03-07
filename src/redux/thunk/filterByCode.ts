import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../api/instance";

export const filterByCode = createAsyncThunk(
  "filterByCode",
  async (borders: Array<string>, thunkApi) => {
    try {
      const response = await api.get(`alpha?codes=${borders.join(",")}`);
      return response.data;
    } catch (e: unknown) {
      thunkApi.rejectWithValue(e);
    }
  }
);
