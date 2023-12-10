import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://65739546f941bda3f2aeffb2.mockapi.io/adverts';

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/cars');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getAllCarsByPages = createAsyncThunk(
  'cars/getAllByPages',
  async (currentPage, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({
        limit: 12,
        page: currentPage,
      });
      const { data } = await axios.get(`/cars?${params}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
