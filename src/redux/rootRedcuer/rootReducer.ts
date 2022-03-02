import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "../slices/countysSlice";
import detailCountryReducer from "../slices/detailCountrySlice";

export const rootReducer = combineReducers({
  countrysSlice: countryReducer,
  detailCountrySlice: detailCountryReducer,
});
