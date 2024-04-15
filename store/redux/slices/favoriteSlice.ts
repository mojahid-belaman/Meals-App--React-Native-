import { createSlice } from "@reduxjs/toolkit";

interface IFavoriteState {
  ids: string[];
}

const initialState: IFavoriteState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.ids.push(action.payload);
      return state;
    },
    removeFavorites(state, action) {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
      return state;
    },
  },
});

export const { addToFavorites, removeFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
