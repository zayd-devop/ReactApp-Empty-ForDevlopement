import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chambres: [
    { num: 101, type: "simple", prix: 50 },
    { num: 102, type: "double", prix: 80 },
    { num: 103, type: "suite", prix: 120 },
    { num: 104, type: "simple", prix: 55 }
  ],
  clients: [
    { id: 1, nom: "John Doe", login: "john_doe", password: "password123" },
    { id: 2, nom: "Jane Smith", login: "jane_smith", password: "qwerty456" },
    { id: 3, nom: "Alice Johnson", login: "alice_johnson", password: "letmein789" }
  ],
  reservations: []
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },
    deleteReservation: (state, action) => {
      state.reservations = state.reservations.filter(res => res.id_res !== action.payload);
    }
  }
});

export const { addReservation, deleteReservation } = hotelSlice.actions;
export default hotelSlice.reducer;