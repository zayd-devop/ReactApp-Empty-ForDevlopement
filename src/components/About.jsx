import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import learLogo from '../assets/lear-logo-vector.png'
import yazakiLogo from'../assets/yazaki.png'
import coficabLogo from'../assets/coficab.png'
import marelliLogo from '../assets/magneti.png'
import acomeLogo from '../assets/acome.png'
import erumLogo from '../assets/erum.png'
import elastomerLogo from '../assets/elastomer.png'
import brillasLogo from '../assets/brillas.png'



export default function About() {
  return (
    <div className='container'>
      <div className='hero-section'>
      <div className="hero-content">
      <h1>À propos de TECHNO SERVICES EL OUARTI</h1>
      <p>TECHNO SERVICES EL OUARTI est spécialisée en maintenance industrielle et installations électriques basse tension. Basée à Tanger, l’entreprise intervient partout au Maroc pour des clients industriels exigeants.</p>
      </div>
      </div>
        <div className='stats-bar'>
        <div className='stat-item'>
          <h6>10+</h6>
          <p>Années d'expérience</p>
        </div>
        <div className='stat-item'>
          <h6>24/7</h6>
          <p>Dépannage Urgent</p>
        </div>
        <div className='stat-item'>
          <h6>100%</h6>
          <p>Couverture Nationale</p>
        </div>
      </div>
      <div className='section-container' style={{background: '#f9f9f9'}}>
        <div className='section-title'>
            <h4>NOS RÉFÉRENCES CLIENTS</h4>
            <p>Clients industriels et groupes internationaux.</p>
        </div>
        
<div className='references-grid'>
  {[
    { name: 'LEAR Corporation', logo: learLogo },
    { name: 'Yazaki', logo: yazakiLogo },
    { name: 'Marelli', logo: marelliLogo },
    { name: 'COFICAB', logo: coficabLogo }, 
    { name: 'ACOME Group', logo: acomeLogo },
    { name: 'ERUM Group', logo: erumLogo },
    { name: 'Elastomer Solutions', logo: elastomerLogo },
    { name: 'Brillas Agusti', logo: brillasLogo }
  ].map((client, index) => (
      <div key={index} className='ref-card-logo'>
        <img 
          src={client.logo} 
          alt={client.name} 
        />
      </div>
  ))}
    </div>
    </div>
    </div>
  )
}
