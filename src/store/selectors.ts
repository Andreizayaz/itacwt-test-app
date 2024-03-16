import type { RootState } from "./store";
export const selectSearchFilterData = (state: RootState) =>
  state.serverData.searchFilterData;

export const selectServerData = (state: RootState) =>
  state.serverData.serverData;
