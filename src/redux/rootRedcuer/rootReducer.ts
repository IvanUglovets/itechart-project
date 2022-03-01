import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "../slices/countysSlice";

export const rootReducer = combineReducers({
  countrysSlice: countryReducer,
});
