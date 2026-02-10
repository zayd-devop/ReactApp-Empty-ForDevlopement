import React from 'react'

export default function Employe({employe}) {
  return (
    <div>
        <img src={employe.image} alt={employe.nom} />
        <h4>{employe.nom}</h4>
    </div>
  )
}
