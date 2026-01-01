import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailedAction, loginSuccessAction } from "../store/authActions";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login () {
    //state pour les champs
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    //dispatch et navigate
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state=>state.auth.users);

    //handleLogin
    function handleLogin (e) {
        e.preventDefault();
        //chercher users
        const userExist = users.find((u)=> u.username === username && u.password ===password);
        if (userExist) {
            dispatch(loginSuccessAction(userExist))
            navigate ('/accueil')
        } else {
            dispatch(loginFailedAction())
            alert ('utilisateur login ou mot de passe n est pas valide')

        }
    }
    return (
        <div>
            <label>Username :</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <label>Password :</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Se Connecter</button>
            <Link to='/inscription'>
            s'inscrire
            </Link>
        </div>
    )
}