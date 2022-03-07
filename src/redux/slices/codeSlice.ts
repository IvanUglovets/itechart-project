import { ICountry } from "./../../models/ICountry";
import { filterByCode } from "./../thunk/filterByCode";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IStateCode {
  borders: Array<ICountry>;
}

const initialState: IStateCode = {
  borders: [],
};

const countrysSlice = createSlice({
  name: "codeCountrys",
  initialState,
  reducers: {},
  extraReducers: {
    [filterByCode.fulfilled.type]: (
      state: IStateCode,
      { payload }: PayloadAction<Array<ICountry>>
    ) => {
      state.borders = payload;
    },
  },
});

export default countrysSlice.reducer;
