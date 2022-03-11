import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getOneCountry } from "../thunk/getOneCountry";
import { ICountry } from "../../models/ICountry";

interface IStateCountries {
  isLoading: boolean;
  country: null | ICountry;
  error: string | null;
}

const initialState: IStateCountries = {
  isLoading: false,
  country: null,
  error: null,
};

const detailCountrySlice = createSlice({
  name: "oneCountry",
  initialState,
  reducers: {},
  extraReducers: {
    [getOneCountry.pending.type]: (state: IStateCountries) => {
      state.isLoading = true;
    },
    [getOneCountry.fulfilled.type]: (
      state: IStateCountries,
      { payload }: PayloadAction<ICountry>
    ) => {
      state.isLoading = false;
      state.country = payload;
    },
  },
});

export default detailCountrySlice.reducer;
