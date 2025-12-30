import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPostAction } from "../store/actions"




export default function ajouter () {
    const [champText1,setText1]=useState();
    const [champText2,setText2]=useState();
    const dispatch = useDispatch();
    //pour incrementer l'id
    const count =useSelector(data=>data.table.length)
        const handleClick = (e) => {
        e.preventDefault();
        dispatch(addPostAction({
            id:count+1,
            champ1:val1,
            champ2:val2
        }))
    }



    return (
        <form>
        <input type="text" value={title} onChange={(e)=>setText1(e.target.value)}/>
        <input type="text" value={body} onChange={(e)=>setText2(e.target.value)}/>
        <button onClick={handleClick}>Ajouter</button>
        </form>
    )
}