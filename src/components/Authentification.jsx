import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginUser } from "../app/hotelSlice";

export default function Authentification (){
    //gestion des champs
    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')
    const [msg,setMsg] = useState('');

    const dispatch=useDispatch()
    const navigate = useNavigate()

    //recuperation de liste clients
    const clients = useSelector((state) => state.hotel.clients);
    //affichage msg error
    const handleLogin = (e) => {
        e.preventDefault();
        const clientExist = clients.find((c)=>c.login === login && c.password === password)
        if(clientExist) {
            setMsg ('');
            dispatch(loginUser(clientExist));
            navigate(`/chambres/${clientExist.id}`)
        } else {
            setMsg("client n'existe pas");
        }
    }
    return (
        <div>
            login :<input type="text" value={login} onChange={(e)=>setLogin(e.target.value)}/>
            Password :<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {msg && (
            <div>
                {msg}
            </div>
        )}
    
            <button onClick={handleLogin}>Se Connecter</button>
        </div>
        //affichage error
    )
}