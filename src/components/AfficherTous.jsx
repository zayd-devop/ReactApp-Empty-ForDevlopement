//recuperer data from store UserSelectore data = state
//functions du buttons
//delete ici
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { action concernes } from "../store/actions"
import AddComponent from "./AddArticles"

export default function AfficherTous() {
    const articles = useSelector(data=>data.table)
    const dispatch =useDispatch()
    const handleDelete =(id) => {
        dispatch(deleteAction(id))
    }
    return (
        <div>
            <AddArticle></AddArticle>

            {
                table.map((t,index)=> {
                    return (
                        <div key={index}>
                            <h1>{t.title}</h1>
                            <p>{t.body}</p>
                            <button onClick={()=>handleDelete(t.id)}>Supprimer</button>
                            <Link to={`/update/${t.id}`}>
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