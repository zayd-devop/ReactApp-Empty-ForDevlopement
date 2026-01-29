import React from 'react'
import '../App.css';


export default function Services() {
  return (
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
          </div>
  )
}
