import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PageType, PriceType, ProductType } from "./types";

type ServerDataState<T> = {
  serverData: T[];
  searchFilterData: T[];
};

// Define the initial state using that type
const initialState: ServerDataState<ProductType | PageType | PriceType> = {
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
    setSearchResult: (state, action: PayloadAction<any[]>) => {
      state.searchFilterData = action.payload;
    },
  },
});

export const { setServerData, setSearchResult } = serverDataSlice.actions;

export default serverDataSlice.reducer;
