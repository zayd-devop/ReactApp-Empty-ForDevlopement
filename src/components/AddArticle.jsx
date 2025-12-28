import { useState } from "react"
import { useDispatch } from "react-redux";
import {addPost} from "../store/actions"

export default function AddArticle()
{
   const [title,setTitle]=useState();
   const [body,setBody]=useState();
   const dispatch=useDispatch()
   function ajouter(e)
   {
      e.preventDefault();
      console.log(title)
      dispatch(addPost({title:title,body:body}))
   }
   return(
      <form onSubmit={ajouter}>
         <input type="text" onChange={(e)=>setTitle(e.target.value)}  />
         <input type="text" onChange={(e)=>setBody(e.target.value)} />
         <input type="submit" value="Ajouter"/>
      </form>
   )
}