//store qui permet de gerer l'etat globale de l'application
//Etape 3 :creation store avec configureStore
import { configureStore } from '@reduxjs/toolkit';
import hotelSlice from './hotelSlice';

const store = configureStore({
  reducer: {
    hotel: hotelSlice,
  },
});

export default store;

