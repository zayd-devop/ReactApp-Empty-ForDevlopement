import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updatePostAction } from "../store/actions"
import { useParams } from "react-router-dom"



export default function UpdatePost () {
    //recuperation de l'id
    const {id} = useParams()
    //
    const article =useSelector(data=>data.articles.find((a)=>a.id ===parseInt(id)))

    const [title,setTitle]=useState(article.title);
    const [body,setBody]=useState(article.body);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updatePostAction({
            id:id,
            title:title,
            body:body
        }))
        //rederiction vers home
        navigate('/')
    }


    return (
        <form>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button onClick={handleClick}>Update</button>
        </form>
    )
}