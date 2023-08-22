import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ISearch {
  searchTerm: string;
  AllData: { data: [] };
  searchData: { data: [] };
}
const initialState: ISearch = {
  AllData: { data: [] },
  searchTerm: "",
  searchData: { data: [] },
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<[]>) => {
      state.AllData.data = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSearchData: (state, action: PayloadAction<[]>) => {
      state.searchData.data = action.payload;
    },
  },
});

export const { setData, setSearch, setSearchData } = playListSlice.actions;

export default playListSlice.reducer;
