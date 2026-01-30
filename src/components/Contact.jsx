import React, { useState } from 'react';
import '../App.css';
/* --- 1. IMPORTATION DES ICÔNES --- */
/* FaMapMarkerAlt = Localisation, FaPhoneAlt = Téléphone, FaEnvelope = Email, FaWhatsapp = Le logo officiel */
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "212654276580"; 
    const text = `*Nouvelle demande de devis via Site Web*%0A%0A*Nom/Société:* ${formData.name}%0A*Tél:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Besoin:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="contact-light-section">
      <div className="contact-container">
        
        <div className="contact-grid">
          
          {/* --- COLONNE GAUCHE --- */}
          <div className="light-card contact-left">
            <div className="contact-header-row">
                <h2>Coordonnées</h2>
                <div className="badges-row">
                    <span className="badge-light">Tanger</span>
                    <span className="badge-light">Maroc</span>
                    <span className="badge-light highlight">Partout au Maroc</span>
                </div>
            </div>
            
            <p className="contact-desc">
              Basé à Tanger, intervention Partout au Maroc pour l'industrie.
            </p>

            <div className="info-list">
                {/* --- 2. REMPLACEMENT DES EMOJIS PAR DES COMPOSANTS D'ICÔNES --- */}
                <div className="info-item-light">
                    <div className="icon-box">
                        <FaMapMarkerAlt /> {/* Icône Localisation */}
                    </div>
                    <div>
                        <h4>Tanger, Maroc</h4>
                        <p>Siège social & Base d'intervention</p>
                    </div>
                </div>

                <div className="info-item-light">
                    <div className="icon-box">
                        <FaPhoneAlt /> {/* Icône Téléphone */}
                    </div>
                    <div>
                        <h4>0654 276 580</h4>
                        <p>Ligne directe (Urgence 24/7)</p>
                    </div>
                </div>

                <div className="info-item-light">
                    <div className="icon-box">
                        <FaEnvelope /> {/* Icône Email */}
                    </div>
                    <div>
                        <h4>technoservices.elouarti@gmail.com</h4>
                        <p>Réponse sous 24h</p>
                    </div>
                </div>
            </div>

            <div className="action-buttons-row">
                {/* --- 3. AJOUT DE L'ICÔNE WHATSAPP AU BOUTON --- */}
                <button className="btn-whatsapp" onClick={handleSubmit}>
                    <FaWhatsapp className="btn-icon" /> WhatsApp Direct
                </button>
                <a href="tel:+212654276580"><button className="btn-light-outline">Appeler</button></a>
            </div>
          </div>

          {/* --- COLONNE DROITE --- */}
          <div className="light-card contact-right">
            <h2>Demande de devis</h2>
            <p className="form-subtitle">Remplissez ce formulaire, le message s’ouvrira pré-rempli dans WhatsApp pour un traitement rapide.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
                {/* (Les inputs ne changent pas...) */}
                <div className="form-group">
                    <input type="text" name="name" placeholder="Nom / Société" className="light-input" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="tel" name="phone" placeholder="Téléphone" className="light-input" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email (Optionnel)" className="light-input" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Décrivez votre besoin..." className="light-input light-textarea" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="btn-submit-red">
                    Envoyer la demande
                    {/* --- 4. AJOUT DE L'ICÔNE DANS LE BADGE DU BOUTON ROUGE --- */}
                    <span className="wa-icon">
                        <FaWhatsapp /> via WhatsApp
                    </span>
                </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}