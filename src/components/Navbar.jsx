import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// CORRECTION : "actions3" (un seul t)
import { logoutUser } from "../store/actions3";
import '../App.css'; // On importe le CSS

export default function Navbar() {
  const panier = useSelector((state) => state.r_panier.panier);
  const { isAuth, user } = useSelector((state) => state.r_auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = panier.reduce((acc, item) => acc + item.qte_cmd, 0);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* --- LOGO ZAYD STORE --- */}
      <Link to="/" className="brand-logo">
        {/* Petite icône Z stylisée */}
        <div className="logo-icon">Z</div> 
        <div className="logo-text">
          Zayd<span className="logo-accent">Store</span>
        </div>
      </Link>
      
      <div className="nav-menu">
        <Link to="/" className="nav-link">Produits</Link>
        
        {/* Lien Panier avec Badge */}
        <Link to="/panier" className="nav-link cart-wrapper">
          <span>🛒 Panier</span>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
        
        {/* Section Auth */}
        {isAuth ? (
          <div className="user-section">
            <span className="user-name">Bonjour, {user?.name}</span>
            <button onClick={handleLogout} className="btn-logout">
              Déconnexion
            </button>
          </div>
        ) : (
          <div className="user-section" style={{border: 'none'}}>
             {/* J'ai transformé Login en bouton plus visible */}
            <Link to="/login" className="nav-link" style={{marginRight: '15px'}}>Login</Link>
            <Link to="/register" className="btn-login">S'inscrire</Link>
          </div>
        )}
      </div>
    </nav>
  );
}