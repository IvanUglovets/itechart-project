import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IStateUser {
  name?: string;
  token: string;
  email: string;
}

const initialState: IStateUser = {
  name: "",
  token: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IStateUser, { payload }: PayloadAction<IStateUser>) => {
      state.name = payload.name;
      state.email = payload.email;
      state.token = payload.token;
    },
    removeUser: (state) => {
      state.email = "";
      state.name = "";
      state.token = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
