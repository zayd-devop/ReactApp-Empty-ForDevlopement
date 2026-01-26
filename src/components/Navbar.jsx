import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <img src="logo.png" alt="Logo" />
    <Link to='/Accueil'>
        Accueil
    </Link>
    </div>
  )
}
