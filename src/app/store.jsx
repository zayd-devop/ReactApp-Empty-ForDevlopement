import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import sportReducer from '../features/sportSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sport: sportReducer,
  },
});