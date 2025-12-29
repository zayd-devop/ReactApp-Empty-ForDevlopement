import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../features/store';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email);

    if (!user) {
      alert("Email inconnu, redirection vers l'inscription.");
      navigate('/inscription');
    } else if (user.password === password) {
      dispatch(login(user));
      navigate('/accueil');
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <div>
      <h2>Authentification</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Valider</button>
      </form>
      <div>
        <Link to="/inscription">S'inscrire</Link>
      </div>
    </div>
  );
};

export default Auth;