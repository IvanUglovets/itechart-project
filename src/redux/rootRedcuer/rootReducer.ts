import { combineReducers } from "@reduxjs/toolkit";
import codeReducer from "../slices/codeSlice";
import countryReducer from "../slices/countysSlice";
import detailCountryReducer from "../slices/detailCountrySlice";
import searchSliceReducer from "../slices/searchSlice";
import userReducer from "../slices/userSlice";

export const rootReducer = combineReducers({
  countrysSlice: countryReducer,
  detailCountrySlice: detailCountryReducer,
  searchSlice: searchSliceReducer,
  codeSlice: codeReducer,
  userSlice: userReducer,
});
