import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCountrys } from "../thunk/getAllCountrys";
import { ICountry } from "../../models/ICountry";
import {filterCountrysByRegion} from "../thunk/filterCountrysByRegion";

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
  reducers: {
    // searchCountrys: (state:IStateCountrys, {payload}: PayloadAction<string>) => {
    //   state.countrysList = state.countrysList.filter(country => country.name.toLowerCase().includes(payload.toLowerCase()))
    // }
  },
  extraReducers: {
    [getAllCountrys.pending.type]: (state: IStateCountrys) => {
      state.isLoading = true;
    },
    [getAllCountrys.fulfilled.type]: (
      state: IStateCountrys,
      { payload }: PayloadAction<ICountry[]>
    ) => {
      state.isLoading = false;
      state.countrysList = payload;
    },
    [filterCountrysByRegion.fulfilled.type] : (
        state: IStateCountrys,
        { payload }: PayloadAction<ICountry[]>
    ) => {
      state.isLoading = false;
      state.countrysList = payload;
    },
  },
});

export default countrysSlice.reducer;
