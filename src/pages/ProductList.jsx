import { useDispatch, useSelector } from "react-redux"
import { addToCartAction, deleteProductAction } from "../store/productActions"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function ProductList () {
    const products = useSelector(state => state.prd.products)
    const dispatch =useDispatch ()
    function handleDelete(id) {
        dispatch(deleteProductAction(id))
    }
    function handleAddToCart (product) {
        dispatch(addToCartAction(product))
    }
    return (
        <div>
            <NavBar></NavBar>
            <Link to='/add-product'>
            <button>Add Product</button>
            </Link>
            <div>
                { products.map((p,index)=> {
                return (
                    <div key={index}>
                    <p>Name : {p.name}</p>
                    <p>description : {p.description}</p>
                    <p>Prix : {p.price}</p>
                    <button onClick={()=>handleAddToCart(p)}>Ajouter au Panier</button>
                    <button onClick={()=>handleDelete(p.id)}>Supprimer</button>
                    </div>
                )
            }
            )
        }
            </div>
        </div>
    )
}