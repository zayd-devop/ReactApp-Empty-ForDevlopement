import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addProductAction } from "../store/productActions"
import NavBar from "../components/NavBar"

export default function AddProduct () {
    const [nom,setNom] = useState('')
    const [prix,setPrix] = useState(0)
    const [description,setDescription] = useState()
    const dispatch =useDispatch()
    const navigate = useNavigate()
    function handleAddProduct () {
        dispatch(addProductAction({
            id:Date.now(),
            name:nom,
            prix:prix,
            description:description
        }))
        navigate('/products')
    }
    return (
        <div>
            <NavBar></NavBar>
            <label>Nom :</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
            <label>Prix :</label>
            <input type="number" value={prix} onChange={(e)=>setPrix(e.target.value)} />
            <label>Description :</label>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    )
}