import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import learLogo from '../assets/lear-logo-vector.png'
// On utilise le même fichier CSS

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* COLONNE 1 : LOGO & DESCRIPTION */}
        <div className="footer-section about">
          <div className="footer-logo">
             <img src={learLogo} alt="Techno Services Logo" className="footer-logo-img" />
             <div>
                <h3 className="footer-title-red">TECHNO SERVICES</h3>
                <span className="footer-subtitle">EL OUARTI S.A.R.L</span>
             </div>
          </div>
          <p className="footer-text">
            Maintenance industrielle et installations électriques basse tension.
            Basé à Tanger, intervention partout au Maroc.
            <br/><br/>
            <strong>Votre partenaire confiance pour la continuité de service.</strong>
          </p>
        </div>

        {/* COLONNE 2 : CONTACT (Au milieu comme demandé) */}
        <div className="footer-section contact-info">
          <h4>NOUS CONTACTER</h4>
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>Tanger, Maroc</p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>0654 276 580</p>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <p>technoservices.elouarti@gmail.com</p>
          </div>
          
          <Link to='/contact'>
            <button className="btn-red btn-small">Demander un devis</button>
          </Link>
        </div>

        {/* COLONNE 3 : MAP (À droite comme demandé) */}
        <div className="footer-section map-section">
          <h4>NOTRE LOCALISATION</h4>
          <div className="map-container">
            {/* Iframe Google Maps centrée sur Tanger */}
            <iframe 
              title="Localisation Techno Services"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103630.77943482704!2d-5.898730992384974!3d35.77533866209569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTanger%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1706112345678!5m2!1sfr!2sma" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Techno Services El Ouarti S.A.R.L - Tous droits réservés.</p>
      </div>
    </footer>
  )
}