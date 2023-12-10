import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getAllCarsByPages } from './operationsThunks';

const initialState = {
  items: [],
  itemsAll: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const handleRejected = (state, payload) => {
  state.isLoading = true;
  state.error = payload.error;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.itemsAll = payload;
      })
      .addCase(getAllCars.rejected, handleRejected)
      .addCase(getAllCarsByPages.pending, handlePending)
      .addCase(getAllCarsByPages.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(getAllCarsByPages.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
