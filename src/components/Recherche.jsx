import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Recherche = () => {
  const [searchSport, setSearchSport] = useState('');
  const allSports = useSelector(state => state.sports.list);
  const allUsers = useSelector(state => state.users.list);

  const resultats = allSports
    .filter(s => s.nomSport.toLowerCase().includes(searchSport.toLowerCase()) && searchSport !== '')
    .map(sport => {
      const user = allUsers.find(u => u.idSportif === sport.idSportif);
      return { ...user, niveau: sport.niveau, nomSport: sport.nomSport };
    });

  return (
    <div>
      <h4>Rechercher des participants par sport</h4>
      <input 
        type="text" 
        placeholder="Saisir le nom du sport..." 
        value={searchSport}
        onChange={(e) => setSearchSport(e.target.value)}
      />

      {searchSport && (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Ville</th>
              <th>Email</th>
              <th>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {resultats.map((res, index) => (
              <tr key={index}>
                <td>{res.nom}</td>
                <td>{res.prenom}</td>
                <td>{res.ville}</td>
                <td>{res.email}</td>
                <td>{res.niveau}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Recherche;