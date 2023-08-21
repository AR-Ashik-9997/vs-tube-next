import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBooks {
  genre: string;
  publicationYear: string;
  searchTerm: string;
}

const initialState: IBooks = {
  genre: "",
  publicationYear: "",
  searchTerm: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setpublicationYear: (state, action: PayloadAction<string>) => {
      state.publicationYear = action.payload;
    },
    setsearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setGenre, setpublicationYear, setsearchTerm } =
  bookSlice.actions;

export default bookSlice.reducer;
