
const Article=(props)=>{
   return (
      <div>
         <h1>{props.article.id} - {props.article.title}</h1>
         <p>{props.article.body}</p>
      </div>
   )

}
export default Article