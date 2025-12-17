import React, { useState } from "react";
import AddEvent from "./components/AddEvent";
import EventItem from "./components/EventItem";
import Header from "./components/Header";
import './App.css'; // Importation du fichier de style

function App() {
  const [evenements, setEvenements] = useState([
    { 'id': 1, 'title': 'Photographie', 'description': '', 'date': '19/12/2025', 'lieu': 'Tanger', 'type': 'atelier' },
    { 'id': 2, 'title': 'Machine Learning', 'description': 'Machine Learning', 'date': '27/12/2025', 'location': 'a distance', 'type': 'conference' }
  ]);

  const [page, setPage] = useState('Tous les evenements');

  const supprimer = (id) => setEvenements(evenements.filter(ev => ev.id !== id));
  const ajouter = (nouveau) => setEvenements([...evenements, nouveau]);

  return (
    <React.StrictMode>
      <Header />
      <div className="App">
        {/* Menu de navigation avec classes */}
        <nav className="nav-menu">
          <button className="btn-nav" onClick={() => setPage('Tous les evenements')}>
            Tous les events
          </button>
          <button className="btn-nav" onClick={() => setPage('Ajouter Evenement')}>
            Add Event
          </button>
        </nav>

        {/* Zone de contenu avec classes */}
        <div className="content-container">
          {page === 'Tous les evenements' && (
            <div className="events-grid">
              <EventItem list={evenements} onDelete={supprimer} />
            </div>
          )}

          {page === 'Ajouter Evenement' && (
            <div className="form-wrapper">
              <AddEvent onAdd={ajouter} />
            </div>
          )}
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;