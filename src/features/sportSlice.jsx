import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sports: [
    { id: 1, idSportif: 1, nomSport: "Tennis", niveau: "Expert" },
    { id: 2, idSportif: 1, nomSport: "Football", niveau: "Débutant" }
  ],
  nextSportId: 3
};

const sportSlice = createSlice({
  name: 'sport',
  initialState,
  reducers: {
    addSport: (state, action) => {
       // pour les donnees de test
       state.sports.push({ ...action.payload, id: state.nextSportId++ });
    },
    updateLevel: (state, action) => {
      const { id, newLevel } = action.payload;
      const sport = state.sports.find(s => s.id === id);
      if (sport) sport.niveau = newLevel; // modifier niveau 
    },
    deleteSport: (state, action) => {
      const idToDelete = action.payload;
      state.sports = state.sports.filter(s => s.id !== idToDelete); 
    }
  }
});

export const { addSport, updateLevel, deleteSport } = sportSlice.actions;
export default sportSlice.reducer;