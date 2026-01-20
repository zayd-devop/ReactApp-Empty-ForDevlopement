import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// CORRECTION : "actions3" (un seul t)
import { logoutUser } from "../store/actions3";
import '../App.css'; 

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
      <Link to="/" className="brand-logo">
        <div className="logo-icon">Z</div> 
        <div className="logo-text">
          Zayd<span className="logo-accent">Store</span>
        </div>
      </Link>
      
      <div className="nav-menu">
        <Link to="/" className="nav-link">Produits</Link>
        
        <Link to="/panier" className="nav-link cart-wrapper">
          <span>🛒 Panier</span>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
        
        {isAuth ? (
          <div className="user-section">
            <span className="user-name">Bonjour, {user.name}</span>
            <button onClick={handleLogout} className="btn-logout">
              Déconnexion
            </button>
          </div>
        ) : (
          <div className="user-section" style={{border: 'none'}}>
            <Link to="/login" className="nav-link" style={{marginRight: '15px'}}>Login</Link>
            <Link to="/register" className="btn-login">S'inscrire</Link>
          </div>
        )}
      </div>
    </nav>
  );
}