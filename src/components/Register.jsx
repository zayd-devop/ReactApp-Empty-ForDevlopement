import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions3";
import { useNavigate, Link } from "react-router-dom"; // Ajout de Link
import '../App.css';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    dispatch(registerUser(newUser));
    alert("Inscription réussie ! Veuillez vous connecter.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
            <label>Nom complet</label>
            <input 
                type="text" 
                placeholder="Zaid ..."
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
            />
        </div>
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
                placeholder="Choisissez un mot de passe"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
        </div>
        <button type="submit" className="btn-submit">S'inscrire</button>
      </form>

      {/* Lien vers la connexion */}
      <div className="auth-switch">
          Déjà un compte ? 
          <Link to="/login">Se connecter</Link>
      </div>
    </div>
  );
}