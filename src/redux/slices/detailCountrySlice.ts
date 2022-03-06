import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getOneCountry } from "./../thunk/getOneCountry";
import { ICountry } from "../../models/ICountry";

interface IStateCountrys {
  isLoading: boolean;
  country: null | ICountry;
  error: string | null;
}

const initialState: IStateCountrys = {
  isLoading: false,
  country: null,
  error: null,
};

const detailCountrySlice = createSlice({
  name: "oneCountry",
  initialState,
  reducers: {},
  extraReducers: {
    [getOneCountry.pending.type]: (state: IStateCountrys) => {
      state.isLoading = true;
    },
    [getOneCountry.fulfilled.type]: (
      state: IStateCountrys,
      { payload }: PayloadAction<ICountry>
    ) => {
      state.isLoading = false;
      state.country = payload;
    },
  },
});

export default detailCountrySlice.reducer;
