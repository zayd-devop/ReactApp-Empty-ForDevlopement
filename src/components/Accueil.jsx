import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { logout } from '../features/store';

const Accueil = () => {
  const user = useSelector(state => state.users.connectedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <div>
        Bienvenue, {user?.nom} {user?.prenom} !
      </div>
      
      <nav>
        <Link to="/accueil/mes-sports">Mes Sports</Link>
        <Link to="/accueil/recherche">Recherche Sportifs</Link>
        <button onClick={handleLogout}>Déconnecter</button>
      </nav>

      <Outlet />
    </div>
  );
};

export default Accueil;