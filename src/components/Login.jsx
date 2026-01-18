import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions3";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
        alert("Email ou mot de passe incorrect ");
    }
  };

  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Mot de passe:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}