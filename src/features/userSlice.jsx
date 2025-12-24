//gestion dinscription,  connexion et session active
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { idSportif: 1, nom: "Saousaou", prenom: "Zaid", ville: "Tanger", email: "zaid@test.com", password: "123" }
  ],
  currentUser: null, //connected user
  nextId: 2 // pour auto-increment
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      //add with increments
      const newUser = { ...action.payload, idSportif: state.nextId };
      state.users.push(newUser);
      state.nextId += 1;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(u => u.email === email && u.password === password);
      if (user) {
        state.currentUser = user;
      }
    },
    logout: (state) => {
      state.currentUser = null; // deconnexion
    }
  }
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;