import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteReservation } from '../app/hotelSlice';

const Historique = () => {
  const { idClient } = useParams();
  const dispatch = useDispatch();
  const { reservations, chambres } = useSelector((state) => state.hotel);

  const mesReservations = reservations.filter(
    (res) => res.id_client === parseInt(idClient)
  );

  const getPrixChambre = (numChambre) => {
    const chambre = chambres.find((c) => c.num === numChambre);
    return chambre ? chambre.prix : 0;
  };

  const montantTotalGlobal = mesReservations.reduce((acc, res) => {
    return acc + (res.nombre_jour * getPrixChambre(res.num_chambre));
  }, 0);

  return (
    <div>
      <h2>Historique des réservations</h2>
      
      {mesReservations.length === 0 ? (
        <p>Aucune réservation trouvée.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Chambre n°</th>
              <th>Date</th>
              <th>Durée (j)</th>
              <th>Prix/Nuit</th>
              <th>Total Réservation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mesReservations.map((res) => {
              const prixUnitaire = getPrixChambre(res.num_chambre);
              const totalRes = prixUnitaire * res.nombre_jour;
              
              return (
                <tr key={res.id_res}>
                  <td>{res.num_chambre}</td>
                  <td>{res.date_reservation}</td>
                  <td>{res.nombre_jour}</td>
                  <td>{prixUnitaire}</td>
                  <td>{totalRes}</td>
                  <td>
                    <button onClick={() => dispatch(deleteReservation(res.id_res))}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <h3>Montant Total à payer : {montantTotalGlobal} DH</h3>
    </div>
  );
};

export default Historique;