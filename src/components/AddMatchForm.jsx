import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddMatchForm({ onAdd }) {
    const [name, setName] = useState('')
    const [matchDay, setMatchDay] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        const newMatch = {
            id: Date.now(),
            name: name,
            matchDay: matchDay,
            location: location
        }
        onAdd(newMatch);
        navigate('/')
    }

    return (
        <div style={{ padding: '20px' }}>
            <h3>Ajouter un match</h3>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Name : </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div style={{marginBottom: '10px'}}>
                    <label>Date : </label>
                    <input type="date" value={matchDay} onChange={(e) => setMatchDay(e.target.value)} required />
                </div>
                <div style={{marginBottom: '10px'}}>
                    <label>Lieu : </label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <input type="submit" value="Enregistrer" />
            </form>
        </div>
    )
}