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
  },
});

export const { setServerData } = serverDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectServerData = (state: RootState) =>
  state.serverData.serverData;

export default serverDataSlice.reducer;
