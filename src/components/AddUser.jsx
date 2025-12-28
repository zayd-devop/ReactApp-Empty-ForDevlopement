import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../store/actions"




export default function AddArticle () {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const dispatch = useDispatch();
    //pour incrementer l'id
    const count =useSelector(data=>data.users.length)
        const handleClick = (e) => {
        e.preventDefault();
        dispatch(addUser({
            id:count+1,
            name:name,
            email:email
        }))
    }



    return (
        <form>
            <label htmlFor="">Name :</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleClick}>Add user</button>
        </form>
    )
}