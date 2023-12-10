import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favoritesReducer } from './cars/carsFavoritesSlice';
import { carsReducer } from './cars/carsSlice';
import { carFilterReducer } from './cars/carsFilterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(persistConfig, favoritesReducer),
    cars: carsReducer,
    filters: carFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
