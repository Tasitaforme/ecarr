import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const carFavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites: (state, action) => {
      const updatedFavorites = state.favorites.filter(
        item => item.id !== action.payload.id,
      );
      state.favorites = updatedFavorites;
    },
  },
});

export const { addToFavorites, deleteFromFavorites } =
  carFavoritesSlice.actions;
export const favoritesReducer = carFavoritesSlice.reducer;
