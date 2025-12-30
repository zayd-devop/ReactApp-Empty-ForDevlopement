import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Chambres = () => {
  const { idClient } = useParams();
  const chambres = useSelector((state) => state.hotel.chambres);
  const [filtre, setFilter] = useState('tous');
//set utilise pour eviter les doublons
  const typesDisponibles = ['tous', ...new Set(chambres.map((c) => c.type))];

  const chambresFiltrees = filtre === 'tous' 
    ? chambres 
    : chambres.filter((c) => c.type === filtre);

  return (
    <div>
      <h2>Chambres</h2>

      <div>
        <label>Filtrer par type : </label>
        <select value={filtre} onChange={(e) => setFilter(e.target.value)}>
          {typesDisponibles.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {chambresFiltrees.map((chambre) => (
          <li key={chambre.num}>
            <h3>Chambre {chambre.num}</h3>
            <p>Type : {chambre.type}</p>
            <p>Prix : {chambre.prix} DH / nuit</p>
            <Link to={`/reservation/${idClient}/${chambre.num}`}>
              Réserver
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chambres;