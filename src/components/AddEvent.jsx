import React, { useState } from "react";

export default function AddEvent({ onAdd }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [conference, setConference] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            id: Date.now(), // Petit ajout pour avoir un ID unique
            title: title,
            description: description,
            date: date,
            location: location,
            conference: conference
        };
        onAdd(newEvent);
        alert('Event added with success !');
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Ajouter un Évènement</h2>
            <form onSubmit={handleSubmit} className="event-form">
                <div className="form-group">
                    <label>Titre :</label>
                    <input type="text" className="form-input" placeholder="Titre de l'event" onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>Date :</label>
                    <input type="date" className="form-input" onChange={(e) => setDate(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>Lieu :</label>
                    <input type="text" className="form-input" placeholder="Lieu" onChange={(e) => setLocation(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>Type :</label>
                    <select className="form-input" onChange={(e) => setConference(e.target.value)}>
                        <option value="">-- Choisir un type --</option>
                        <option value="atelier">Atelier</option>
                        <option value="conference">Conférence</option>
                        <option value="Personnel">Personnel</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Description :</label>
                    <textarea className="form-input" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <button type="submit" className="btn-submit">Enregistrer</button>
            </form>
        </div>
    );
}