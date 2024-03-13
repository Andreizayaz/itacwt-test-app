import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type ServerDataState = {
  serverData: any[];
};

// Define the initial state using that type
const initialState: ServerDataState = {
  serverData: [],
};

export const serverDataSlice = createSlice({
  name: "serverData",
  initialState,
  reducers: {
    setServerData: (state, action: PayloadAction<any[]>) => {
      state.serverData = action.payload;
    },
  },
});

export const { setServerData } = serverDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectServerData = (state: RootState) => state.serverData.serverData

export default serverDataSlice.reducer;
