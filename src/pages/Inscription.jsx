import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/authActions";
import { useState } from "react";

export default function Inscription () {
    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    //dispatch et navigate
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //handleInscription
    function handleInscription (e) {
        e.preventDefault();
        //validation de mdp
        if (password !== confirmPassword) {
            alert('les mots de passe ne sont pas identiques')
        } else { 
        //creation new user
        const newUser = {
            nom:nom,
            prenom:prenom,
            username:username,
            email:email,
            password:password
        }
        dispatch(register(newUser));
        navigate('/login')
        }
    }
    return (
        <div>
            <label>Nom :</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
            <label>Prenom :</label>
            <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
            <label>Username :</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <label>Email :</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label>Mot de Passe :</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label>Confirmer Mot de Passe :</label>
            <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <button onClick={handleInscription}>S'inscrire</button>
        </div>
    )
}