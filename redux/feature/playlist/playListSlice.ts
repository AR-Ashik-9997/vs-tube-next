import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ISearch {
  searchTerm: string;  
  searchData: { data: [] };
}
const initialState: ISearch = {  
  searchTerm: "",
  searchData: { data: [] },
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {   
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSearchData: (state, action: PayloadAction<[]>) => {
      state.searchData.data = action.payload;
    },
  },
});

export const { setSearch, setSearchData } = playListSlice.actions;

export default playListSlice.reducer;
