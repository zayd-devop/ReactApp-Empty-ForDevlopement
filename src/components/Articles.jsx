//recuperer data from store UserSelectore data = state
//functions du buttons
//delete ici
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deletePostAction } from "../store/actions"
import AddArticle from "./AddArticles"

export default function Articles() {
    const articles = useSelector(data=>data.articles)
    const dispatch =useDispatch()
    const handleDelete =(id) => {
        dispatch(deletePostAction(id))
    }
    return (
        <div>
            <AddArticle></AddArticle>

            {
                articles.map((article,index)=> {
                    return (
                        <div key={index}>
                            <h1>{article.title}</h1>
                            <p>{article.body}</p>
                            <button onClick={()=>handleDelete(article.id)}>Supprimer</button>
                            <Link to={`/update/${article.id}`}>
                            <button >Update</button>
                            </Link>
                            <button>Details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}