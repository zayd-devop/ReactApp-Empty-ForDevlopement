import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReservation } from '../app/hotelSlice';

const Reservation = () => {
  const { idClient, idChambre } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dateRes, setDateRes] = useState('');
  const [nbJours, setNbJours] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelleReservation = {
      id_res: Date.now(),
      num_chambre: parseInt(idChambre),
      id_client: parseInt(idClient),
      date_reservation: dateRes,
      nombre_jour: parseInt(nbJours)
    };

    dispatch(addReservation(nouvelleReservation));
    alert('Réservation confirmée !');
    navigate(`/historique/${idClient}`);
  };

  return (
    <div>
      <h2>Confirmer la réservation</h2>
      <p>Client ID : {idClient}</p>
      <p>Chambre N° : {idChambre}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Date de début :</label>
          <input 
            type="date" 
            value={dateRes} 
            onChange={(e) => setDateRes(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Nombre de jours :</label>
          <input 
            type="number" 
            min="1" 
            value={nbJours} 
            onChange={(e) => setNbJours(e.target.value)} 
            required 
          />
        </div>

        <button type="submit">Valider la réservation</button>
      </form>
    </div>
  );
};

export default Reservation;