import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/acttions3";
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
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>MonShop</Link>
      </div>
      
      <div style={styles.menu}>
        <Link to="/" style={styles.link}>Produits</Link>
        <Link to="/panier" style={styles.link}>
          Panier ({totalItems})
        </Link>
        
        {isAuth ? (
          <>
            <span style={{color: 'white', marginRight: '10px'}}>Bonjour, {user?.name}</span>
            <button onClick={handleLogout} style={styles.btn}>Déconnexion</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>S'inscrire</Link>
          </>
        )}
      </div>
    </nav>
  );
}
const styles = {
  nav: { display: "flex", justifyContent: "space-between", background: "#333", padding: "1rem", alignItems: "center" },
  link: { color: "white", textDecoration: "none", margin: "0 10px" },
  logo: { fontSize: "1.5rem", fontWeight: "bold" },
  btn: { background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }
};