export default function Article(props) {
    return (
        
        <div>
            <h1>{props.articles.title}</h1>
            <p>{props.articles.body}</p>
        </div>
    )
}