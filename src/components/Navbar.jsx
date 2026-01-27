import { Link } from "react-router-dom";
import React from 'react';
import '../App.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
<div className="nav-logo">
  <Link to='/accueil' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
    
    <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#D32F2F"/>
      <path d="M58 20L35 50H55L42 80L65 50H45L58 20Z" fill="white"/>
    </svg>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
      <span style={{ color: '#D32F2F', fontWeight: '900', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        TECHNO SERVICES
      </span>
      <span style={{ color: '#333', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>
        EL OUARTI S.A.R.L
      </span>
    </div>

  </Link>
</div>

      <div className="nav-links">
        <Link to='/accueil'>Accueil</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>À propos</Link>
        <Link to='/contact'>Contact</Link>
        
        <Link to='/contact'>
            <button className="btn-red">Demander un devis</button>
        </Link>
      </div>
    </nav>
  )
}