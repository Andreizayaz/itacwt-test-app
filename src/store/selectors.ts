import type { RootState } from "./store";
export const selectServerData = (state: RootState) =>
  state.serverData.serverData;
