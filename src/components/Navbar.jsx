import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Gestion de Cours</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/courses">Liste des cours</Link></li>
        <li><Link to="/add-course">Ajouter un cours</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;