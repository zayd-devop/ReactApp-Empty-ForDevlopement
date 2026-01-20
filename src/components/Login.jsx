import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions3";
import { useNavigate, Link } from "react-router-dom"; 
import '../App.css'; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(state => state.r_auth.users);
  
  const handleLogin = (e) => {
    e.preventDefault();
    const utilisateurTrouve = users.find(u => u.email === email && u.password === password);
    if (utilisateurTrouve) {
        dispatch(loginUser(utilisateurTrouve));
        navigate("/"); 
    } else {
        alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
            <label>Email</label>
            <input 
                type="email" 
                placeholder="exemple@email.com"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
        </div>
        <div className="form-group">
            <label>Mot de passe</label>
            <input 
                type="password" 
                placeholder="Votre mot de passe"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
        </div>
        <button type="submit" className="btn-submit">Se connecter</button>
      </form>
      
\      <div className="auth-switch">
          Pas encore de compte ? 
          <Link to="/register">S'inscrire ici</Link>
      </div>
    </div>
  );
}