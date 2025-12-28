import { useSelector } from "react-redux"
import AddArticle from "../components/AddArticle"
import Article from "../components/Article";

export default function Articles()
{
   const articles=useSelector(state=>state.postR.articles);
   return(
      <div>
         <AddArticle/>
      {
        articles.map(a=><Article key={a.id} article={a}/>)
      }
      </div>
   )
}