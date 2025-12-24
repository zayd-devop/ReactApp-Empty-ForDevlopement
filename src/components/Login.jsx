import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email,setEmail] = useState('');
    const [mdp,setMdp] = useState('');
    //useSelector pour recuperer les users.
    const users = useSelector(state=>state.user.users)
    //
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlelogin =(e) => {
        e.preventDefault();
        const userExists = users.find(u => u.email === email);
        navigate('/register'); //redirection automaticly
        return;
    }

    if(userExists.password === password) {
        dispatch(login({email, password}));
        navigate('/home'); 
    } else {
        alert("Mot de passse incorrect");
    }
 return (
    <div className="login-container">
      <h2>Authentification</h2>
      <form onSubmit={handlelogin}>
        <div>Email : <input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
        <div>Mot de passe : <input type="password" value={mdp} onChange={e => setMdp(e.target.value)} required /></div>
      </form>
      <Link to="/register">S'inscrire</Link> 
    </div>
  );
}