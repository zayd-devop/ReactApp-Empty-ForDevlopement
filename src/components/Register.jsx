import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions3";
import { useNavigate } from "react-router-dom";

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
        <div>
            <label>Nom:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Mot de passe:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}