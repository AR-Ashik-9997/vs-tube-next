import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import playListReducer from "./feature/playlist/playListSlice";

const store = configureStore({
  reducer: {
    playlist: playListReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
