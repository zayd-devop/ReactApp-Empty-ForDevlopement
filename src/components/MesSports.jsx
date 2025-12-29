import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSport, updateNiveau, addSport } from '../features/store';

const MesSports = () => {
  const user = useSelector(state => state.users.connectedUser);
  const sports = useSelector(state => 
    user ? state.sports.list.filter(s => s.idSportif === user.idSportif) : []
  );
  const dispatch = useDispatch();

  const [newSport, setNewSport] = useState({ nomSport: '', niveau: '' });
  
  // State pour gérer les modifications de niveau par ligne
  const [editValues, setEditValues] = useState({});

  if (!user) return <p>Veuillez vous connecter.</p>;

  const handleAdd = () => {
    if(newSport.nomSport && newSport.niveau) {
      dispatch(addSport({ ...newSport, idSportif: user.idSportif }));
      setNewSport({ nomSport: '', niveau: '' });
    }
  };

  const handleUpdate = (id, originalNiveau) => {
    // On prend la nouvelle valeur, sinon on garde l'ancienne
    const niveauToUpdate = editValues[id] !== undefined ? editValues[id] : originalNiveau;
    dispatch(updateNiveau({ id, niveau: niveauToUpdate }));
    alert("Niveau modifié !");
  };

  const handleChangeLevel = (id, val) => {
    setEditValues({ ...editValues, [id]: val });
  };

  return (
    <div>
      <h4>Mes Sports Pratiqués</h4>
      
      <div>
        <input placeholder="Sport" value={newSport.nomSport} onChange={e => setNewSport({...newSport, nomSport: e.target.value})}/>
        <input placeholder="Niveau" value={newSport.niveau} onChange={e => setNewSport({...newSport, niveau: e.target.value})}/>
        <button onClick={handleAdd}>Ajouter</button>
      </div>

      <table>
        <thead>
          <tr><th>Sport</th><th>Niveau</th><th>Modifier</th><th>Supprimer</th></tr>
        </thead>
        <tbody>
          {sports.map(sport => (
            <tr key={sport.id}>
              <td>{sport.nomSport}</td>
              <td>
                <input 
                  type="text"
                  value={editValues[sport.id] !== undefined ? editValues[sport.id] : sport.niveau} 
                  onChange={(e) => handleChangeLevel(sport.id, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(sport.id, sport.niveau)}>Modifier</button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteSport(sport.id))}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MesSports;