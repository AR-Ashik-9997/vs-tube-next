import { IData } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IData = {
  AllData: { data: [] },
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<[]>) => {
      state.AllData.data = action.payload;
    },
  },
});

export const { setData } = playListSlice.actions;

export default playListSlice.reducer;
