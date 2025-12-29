import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import MesSports from './components/MesSports';
import Recherche from './components/Recherche';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        
        <Route path="/accueil" element={<Accueil />}>
          <Route path="mes-sports" element={<MesSports />} />
          <Route path="recherche" element={<Recherche />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;