import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "../slices/countysSlice";
import detailCountryReducer from "../slices/detailCountrySlice";
import searchSliceReducer from "../slices/searchSlice";

export const rootReducer = combineReducers({
  countrysSlice: countryReducer,
  detailCountrySlice: detailCountryReducer,
  searchSlice: searchSliceReducer
});
