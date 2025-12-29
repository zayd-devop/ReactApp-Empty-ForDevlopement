import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [
      { idSportif: 1, nom: 'Alami', prenom: 'Ahmed', ville: 'Tanger', email: 'ahmed@test.com', password: '123' }
    ],
    connectedUser: null,
  },
  reducers: {
    inscrire: (state, action) => {
      const newId = state.list.length > 0 ? Math.max(...state.list.map(u => u.idSportif)) + 1 : 1;
      state.list.push({ ...action.payload, idSportif: newId });
    },
    login: (state, action) => {
      state.connectedUser = action.payload;
    },
    logout: (state) => {
      state.connectedUser = null;
    }
  }
});

const sportSlice = createSlice({
  name: 'sports',
  initialState: {
    list: [
      { id: 1, idSportif: 1, nomSport: 'Football', niveau: 'Expert' },
      { id: 2, idSportif: 1, nomSport: 'Tennis', niveau: 'Débutant' }
    ]
  },
  reducers: {
    addSport: (state, action) => {
      state.list.push({ ...action.payload, id: Date.now() });
    },
    deleteSport: (state, action) => {
      state.list = state.list.filter(s => s.id !== action.payload);
    },
    updateNiveau: (state, action) => {
      const { id, niveau } = action.payload;
      const sport = state.list.find(s => s.id === id);
      if (sport) sport.niveau = niveau;
    }
  }
});

export const { inscrire, login, logout } = userSlice.actions;
export const { addSport, deleteSport, updateNiveau } = sportSlice.actions;

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    sports: sportSlice.reducer
  }
});