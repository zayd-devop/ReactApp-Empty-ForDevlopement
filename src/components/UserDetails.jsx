import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchUserPosts } from "../store/actions";

export default function UserDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    // Récupération des posts
    // Note : on utilise "data.activeUserPosts" car ton reducer l'a défini ainsi
    const posts = useSelector(data => data.activeUserPosts);
    
    // Récupération du user pour le titre (avec sécurité)
    const user = useSelector(data => data.users.find(u => u.id === parseInt(id)));

    useEffect(() => {
        console.log("1. Composant chargé. ID demandé :", id);
        if(id) {
            dispatch(fetchUserPosts(1));
        }
    }, [dispatch, id]);

    // Debug : Voir si les posts arrivent
    console.log("2. Contenu de posts dans le selector :", posts);

    return (
        <div className="container mt-5">
            <Link to="/">
                <button className="btn btn-secondary mb-3">Retour à la liste</button>
            </Link>

            {user ? (
                <h2>Posts de {user.name}</h2>
            ) : (
                <h2>Posts de l'utilisateur #{id}</h2>
            )}
            
            <hr />

            {/* Condition d'affichage stricte */}
            {!posts || posts.length === 0 ? (
                <div className="alert alert-warning">
                    Aucun post trouvé ou chargement en cours...
                    <br/>
                    (Vérifie la console F12)
                </div>
            ) : (
                <div className="list-group">
                    {posts.map((post) => (
                        <div key={post.id} className="list-group-item">
                            <h5 className="mb-1">{post.title}</h5>
                            <p className="mb-1 text-muted">{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}