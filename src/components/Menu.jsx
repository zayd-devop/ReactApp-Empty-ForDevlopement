import { Link } from "react-router-dom"

export default function Menu () {
    return (
        <div>
            <Link to='/ajouter-recettes'>
            Ajouter Recettes
            </Link>
            <Link to='/afficher-recettes'>
            Afficher Recettes
            </Link>
        </div>
    )
}