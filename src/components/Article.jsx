import { useDispatch } from "react-redux"
import { deletePost } from "../store/actions"
import { Link } from "react-router-dom"
const Article=(props)=>{
 const dispatch= useDispatch()
   return (

      <div>
         <h1>{props.article.id} - {props.article.title}</h1>
         <p>{props.article.body}</p>
         <button onClick={()=>{ dispatch(deletePost(props.article.id))}}>Supprimer</button>
     <Link to={"/update/"+props.article.id}> <button>Modifier</button> </Link>
      </div>
   )

}
export default Article