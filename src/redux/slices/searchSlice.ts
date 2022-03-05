import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IStateSearch{
    search: string
}


const initialState: IStateSearch = {
    search: ""
}


const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        searchCountry: (state: IStateSearch, {payload} : PayloadAction<string>) => {
            state.search = payload
        }
    }
})

export const {searchCountry} = searchSlice.actions

export default searchSlice.reducer