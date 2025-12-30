import { Link, useNavigate, useParams } from "react-router-dom"

export default function Menu () {
    const navigate = useNavigate();
    //recepuration de l'id pour les liens
    const {idClient} = useParams();
    //• L’élément ‘Déconnexion’ permet de retourner l’utilisateur vers la page d’authentification.
    function handleLogout () {
        navigate('/');
    }
    //etape 5: Historique, Chambres et Déconnexion.
    //ajouter l'id
    return (
        <div>
            <Link to={`/historique/${idClient}`}>
            Historique
            </Link>
            <Link to={`/chambre/${idClient}`}>
            Chambres
            </Link>
            <button onClick={handleLogout}>Deconnexion</button>
        </div>
    )
}