import { Link, useNavigate } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <h1>Your Logo</h1>
        <Link to='/accueil'>Accueil</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>A propos</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}
