import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: null,
  price: null,
  mileageFrom: null,
  mileageTo: null,
  isFiltered: false,
};

const carFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrandFilter: (state, { payload }) => {
      state.brand = payload;
      state.isFiltered = true;
    },
    setPriceFilter: (state, { payload }) => {
      state.price = payload;
      state.isFiltered = true;
    },
    setMileageFrom: (state, { payload }) => {
      state.mileageFrom = payload;
      state.isFiltered = true;
    },
    setMileageTo: (state, { payload }) => {
      state.mileageTo = payload;
      state.isFiltered = true;
    },
    resetFilters: state => {
      state.brand = null;
      state.price = null;
      state.mileageFrom = null;
      state.mileageTo = null;
      state.isFiltered = false;
    },
  },
});

export const {
  setBrandFilter,
  setPriceFilter,
  setMileageFrom,
  setMileageTo,
  resetFilters,
} = carFilterSlice.actions;
export const carFilterReducer = carFilterSlice.reducer;
