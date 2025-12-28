import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateUser } from "../store/actions"
import { useParams } from "react-router-dom"



export default function UpdateUser () {
    //recuperation de l'id
    const {id} = useParams()
    //
    const user =useSelector(data=>data.users.find((u)=>u.id ===parseInt(id)))

    const [name,setName]=useState(user ? user.name : "");
    const [email,setEmail]=useState(user ? user.email : "");
    const dispatch = useDispatch();
    const navigate =useNavigate();
    useEffect(() => {
        if(user) {
            setName(user.name);
            setEmail(user.email);
        }
    },[user]
    )
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id:parseInt(id),
            name:name,
            email:email
        }))
        //rederiction vers home
        navigate('/')
    }


    return (
        <form>
            <label htmlFor="">Name :</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="">Email :</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleClick}>Update</button>
        </form>
    )
}