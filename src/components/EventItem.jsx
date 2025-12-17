import React from "react";

export default function EventItem ({list, onDelete}){
    return (
    <div className="list-container">
        <h2 className="list-title">Liste Des Évènements</h2>
        
        {/* Conteneur principal pour la grille */}
        <div className="events-grid">
           {list.map((ev) => (
            <div key={ev.id} className="event-card">
                <h3 className="event-card-title">{ev.title}</h3>
                <p className="event-card-date">📅 {ev.date}</p>
                <p className="event-card-desc">
                    {ev.description} 
                </p>
                <p className="event-card-location">📍 {ev.location}</p>
                
                {/* Bouton avec classe spécifique */}
                <button 
                    className="btn-delete" 
                    onClick={() => onDelete(ev.id)}
                >
                    Supprimer
                </button>
            </div>
            ))}
        </div>
    </div>
    )
}