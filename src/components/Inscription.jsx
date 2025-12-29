import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { inscrire } from '../features/store';

const Inscription = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nom: '', prenom: '', ville: 'Tanger', email: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      alert("Format d'email invalide !");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne sont pas identiques !");
      return;
    }

    dispatch(inscrire({
      nom: formData.nom,
      prenom: formData.prenom,
      ville: formData.ville,
      email: formData.email,
      password: formData.password
    }));

    alert("Inscription réussie ! Connectez-vous.");
    navigate('/');
  };

  return (
    <div>
      <h3>Formulaire d'inscription</h3>
      <form onSubmit={handleSubmit}>
        <div><label>Nom *</label><input name="nom" onChange={handleChange} required /></div>
        <div><label>Prénom *</label><input name="prenom" onChange={handleChange} required /></div>
        <div>
          <label>Ville *</label>
          <select name="ville" onChange={handleChange}>
            <option value="Tanger">Tanger</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
          </select>
        </div>
        <div><label>Email *</label><input name="email" onChange={handleChange} required /></div>
        <div><label>Mot de passe *</label><input type="password" name="password" onChange={handleChange} required /></div>
        <div><label>Confirmez Mot de passe *</label><input type="password" name="confirmPassword" onChange={handleChange} required /></div>
        
        <button type="submit">Valider</button>
        <button type="button" onClick={() => navigate('/')}>Annuler</button>
      </form>
    </div>
  );
};

export default Inscription;