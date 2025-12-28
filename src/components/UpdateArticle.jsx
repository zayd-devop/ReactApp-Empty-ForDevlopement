import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updatePost} from "../store/actions"
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateArticle()
{
   const {id}=useParams();
   const articles=useSelector(state=>state.postR.articles)
   const article=articles.find(a=>a.id==id);
   const [title,setTitle]=useState(article.title);
   const [body,setBody]=useState(article.body);
   const dispatch=useDispatch()
   const navigate=useNavigate()
   function modifier(e)
   {
      e.preventDefault();
      dispatch(updatePost({id:article.id,title:title,body:body}))
     navigate("/")
   }
   return(
      <form onSubmit={modifier}>
         <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
         <input type="text" onChange={(e)=>setBody(e.target.value)} value={body}/>
         <input type="submit" value="Modifier"/>
      </form>
   )
}