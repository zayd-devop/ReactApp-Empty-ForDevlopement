import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import learLogo from '../assets/lear-logo-vector.png'
import yazakiLogo from'../assets/yazaki.png'
import coficabLogo from'../assets/coficab.png'
import marelliLogo from '../assets/magneti.png'
import acomeLogo from '../assets/acome.png'
import erumLogo from '../assets/erum.png'
import elastomerLogo from '../assets/elastomer.png'
import brillasLogo from '../assets/brillas.png'

export default function Accueil() {
  return (
    <div className='container'>
            <div className='hero-section'> 
        <div className='hero-content'>
            <h6>Basé à Tanger • Intervention Partout au Maroc</h6>
            <h1>MAINTENANCE INDUSTRIELLE & ÉLECTRIQUE</h1>
            <p>Expertise préventive et corrective pour vos usines. Réactivité 24/7 et conformité aux normes.</p>
            <div style={{marginTop: '20px'}}>
                <Link to='/contact'><button className='btn-red'>Demander un devis</button></Link>
                <Link to='/services'><button className='btn-outline'>Nos Services</button></Link>
            </div>
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
      <div className='section-container'>
        <div className='section-title'>
            <h4>Nos Domaines d'Intervention</h4>
            <p>Une expertise technique complète pour garantir votre continuité de service.</p>
        </div>
        <div className='services-grid'>
          <div className='service-card'>
            <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Maintenance" 
                className="service-img"
            />
            <div className="service-content">
                <h6>Facilities Maintenance</h6>
                <p>Maintenance préventive, rondes techniques, checklists et rapports détaillés pour vos infrastructures.</p>
            </div>
          </div>
          <div className='service-card'>
            <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Électricité" 
                className="service-img"
            />
            <div className="service-content">
                <h6>Installations Électriques BT</h6>
                <p>Installation d'armoires, câblage, éclairage industriel et mise en conformité des tableaux.</p>
            </div>
          </div>
          <div className='service-card'>
            <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Multi-technique" 
                className="service-img"
            />
            <div className="service-content">
                <h6>Maintenance Multi-technique</h6>
                <p>Gestion globale : CVC, plomberie industrielle et sécurité incendie.</p>
            </div>
          </div>
        </div>
        
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Link to='/services'><button className='btn-red'>Voir tous nos services</button></Link>
        </div>
      </div>
<div className='section-container' style={{background: '#f9f9f9'}}>
        <div className='section-title'>
            <h4>Ils nous font confiance</h4>
            <p>Partenaires majeurs de l'industrie automobile et manufacturière.</p>
        </div>
        
<div className='references-grid'>
  {[
    // 1. Votre logo local (Vérifiez bien qu'il est dans le dossier 'public')
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
      <div className='section-container'>
        <div className='section-title'>
            <h4>Notre Méthodologie</h4>
        </div>
        <div className='services-grid'>
            <div className='service-card' style={{textAlign:'center', padding:'20px'}}>
                 <h2 style={{color:'#d32f2f'}}>01.</h2>
                 <h6>Diagnostic</h6>
                 <p>Analyse sur site et compréhension du besoin.</p>
            </div>
            <div className='service-card' style={{textAlign:'center', padding:'20px'}}>
                 <h2 style={{color:'#d32f2f'}}>02.</h2>
                 <h6>Devis Clair</h6>
                 <p>Transparence sur les délais et le matériel.</p>
            </div>
            <div className='service-card' style={{textAlign:'center', padding:'20px'}}>
                 <h2 style={{color:'#d32f2f'}}>03.</h2>
                 <h6>Intervention</h6>
                 <p>Exécution sécurisée et respect des normes.</p>
            </div>
            <div className='service-card' style={{textAlign:'center', padding:'20px'}}>
                 <h2 style={{color:'#d32f2f'}}>04.</h2>
                 <h6>Rapport</h6>
                 <p>Compte-rendu détaillé et recommandations.</p>
            </div>
        </div>
      </div>

    </div>
  )
}