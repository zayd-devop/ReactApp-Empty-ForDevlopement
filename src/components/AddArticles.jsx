import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPostAction } from "../store/actions"




export default function AddArticle () {
    const [title,setTitle]=useState();
    const [body,setBody]=useState();
    const dispatch = useDispatch();
    //pour incrementer l'id
    const count =useSelector(data=>data.articles.length)
        const handleClick = (e) => {
        e.preventDefault();
        dispatch(addPostAction({
            id:count+1,
            title:title,
            body:body
        }))
    }



    return (
        <form>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button onClick={handleClick}>Add article</button>
        </form>
    )
}