import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCountrys } from "./../thunk/getAllCountrys";
import { ICountry } from "../../models/ICountry";

interface IStateCountrys {
  isLoading: boolean;
  countrysList: ICountry[];
  error: string | null;
}

const initialState: IStateCountrys = {
  isLoading: false,
  countrysList: [],
  error: null,
};

const countrysSlice = createSlice({
  name: "countrys",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCountrys.pending.type]: (state: IStateCountrys) => {
      state.isLoading = true;
    },
    [getAllCountrys.fulfilled.type]: (
      state: IStateCountrys,
      { payload }: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.countrysList = payload;
    },
  },
});

export default countrysSlice.reducer;
