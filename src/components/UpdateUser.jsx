import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateUserAction } from "../store/actions"
import { useParams } from "react-router-dom"

export default function UpdateUser (){
    const {id} = useParams()
    const user =useSelector(data=>data.users.find((u)=>u.id ===parseInt(id)))
    const [name,setName]=useState(user.name)
    const [email,setEmail]=useState(user.email)
    const dispatch = useDispatch();
    //rederiction vers home
    const navigate =useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateUserAction({
            id:id,
            name:name,
            email:email
        }))
        //rederiction vers home
        navigate('/')
    }
     return (
        <form>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={handleClick}>Enregister</button>
        </form>

    )

}