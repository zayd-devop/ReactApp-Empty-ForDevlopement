import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateAction } from "../store/actions"
import { useParams } from "react-router-dom"



export default function UpdatePost () {
    //recuperation de l'id
    const {id} = useParams()
    //
    const tableSingular =useSelector(data=>data.table.find((a)=>a.id ===parseInt(id)))

    const [champText1,setchampText1]=useState(article.champ1);
    const [champText2,setchampText2]=useState(article.champ2);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateAction({
            id:id,
            champ:val,
            champ:val
        }))
        //rederiction vers home
        navigate('/')
    }


    return (
        <form>
        <input type="text" value={champ1} onChange={(e)=>setchampText1(e.target.value)}/>
        <input type="text" value={champ2} onChange={(e)=>setchampText2(e.target.value)}/>
        <button onClick={handleClick}>Update</button>
        </form>
    )
}