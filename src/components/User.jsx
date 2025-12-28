export default function Article(props) {
    return (
        
        <div>
            <h1>{props.user.title}</h1>
            <p>{props.user.body}</p>
        </div>
    )
}