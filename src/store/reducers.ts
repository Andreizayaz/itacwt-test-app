import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type ServerDataState = {
  serverData: any[];
  searchFilterData: any[];
};

// Define the initial state using that type
const initialState: ServerDataState = {
  serverData: [],
  searchFilterData: [],
};

export const serverDataSlice = createSlice({
  name: "serverData",
  initialState,
  reducers: {
    setServerData: (state, action: PayloadAction<any[]>) => {
      state.serverData = action.payload;
      state.searchFilterData = [...state.serverData];
    },
    setSearchResult:(state, action: PayloadAction<any[]>)=>{
      state.searchFilterData=action.payload
    }
  },
});

export const { setServerData, setSearchResult } = serverDataSlice.actions;

export default serverDataSlice.reducer;
