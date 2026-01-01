import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../store/authActions";
import { Link } from "react-router-dom";
export default function NavBar () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleLogout (e) {
        e.preventDefault();
        dispatch(logoutAction())
        navigate('/login');
    }
    return (
        <div>
            <h2>Redux E Commerce Site</h2>
            <Link to='/about'>
                A propos
            </Link>
            <Link to='/products'>
                Produits
            </Link>
            <Link to='/cart'>
                Panier
            </Link>
            <button onClick={handleLogout}>Deconnexion</button>
        </div>
    )
}