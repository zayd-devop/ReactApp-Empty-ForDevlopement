import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUserAction } from "../store/actions"


export default function AddUser() {
    const count =useSelector(data=>data.users.length)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const dispatch = useDispatch();
    //rederiction vers home
    const navigate =useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addUserAction({
            id:count+1,
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