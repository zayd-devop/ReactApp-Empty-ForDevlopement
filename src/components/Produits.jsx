import { Add_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {Link} from 'react-router-dom'
export default function Produits (){
    //pour afficher la liste 
const produits = useSelector(data => data.r_produits.produits || []);    const  [qte,setQte] = useState(0);
    const dispatch=useDispatch();
    const[qteTotal,setQteTotal] = useState(0);
    const [prixTotal,setPrixTotal] = useState(0);

    function ajouter(id,price){
        const quantiteValide = Number(qte) || 1;
        dispatch(Add_Panier(id,quantiteValide))
        dispatch(Update_Qte(id,quantiteValide))
        setQteTotal(qteTotal+quantiteValide)
        setPrixTotal(prixTotal+(price*quantiteValide))
    }
    return (
        <div>
            <h1>Liste des produits</h1>
            <table>
            {
                produits.map(p=>
                    <tr key={p.id}>
                        <td>{p.title}-  {p.price} - {p.stock}</td>
                        <td><img src={p.image}width={60} height={40} alt="" /></td>
                        <td>Qte :<input type="number" onChange={(e)=>setQte(parseInt(e.target.value))} /></td>
                        <td><button onClick={()=>ajouter(p.id,p.price)}>Ajouter au panier</button></td>
                    </tr>
                )
            }
            </table>
            <p>Qte : {qteTotal}</p>
            <p>Prix Total : {prixTotal}</p>
            <Link to='/panier'>Panier</Link>
        </div>
    )
}