import { useState } from 'react';
import { Add_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import {useDispatch, useSelector} from 'react-redux'; 
export default function Panier() {
    const Produits = useSelector(data=>data.r_produits.produit)
    const panier = useSelector(data=>data.r_panier.produit)
        const  [qte,setQte] = useState(0);
        const dispatch=useDispatch();
        const[qteTotal,setQteTotal] = useState(0);
        const [prixTotal,setPrixTotal] = useState(0);
        
            function ajouter(id,price){
                dispatch(Add_Panier(id,qte))
                dispatch(Update_Qte(id,qte))
                setQteTotal(qteTotal+qte)
                setPrixTotal(prixTotal+(price*qte))
            }
            
    return(
         
        <div>
            <h1>Contenue du panier</h1>
            <table>
                
            {
                
                panier.map(p=> {
                    const pr= Produits.find(prd=>prd.id===p.id)
                    return(<tr key={p.id}>
                        <td>{pr.title}-  {pr.price} - {pr.stock}</td>
                        <td><img src={pr.image}width={60} height={40} alt="" /></td>
                        <td>Qte :<input type="number" value={p.qte_cmd}/></td>
                        <td><button>Supprimer</button></td>
                        <td><button>Modifier</button></td>

                    </tr>)}
                )
            }
            </table>
            <p>Qte : {qteTotal}</p>
            <p>Prix Total : {prixTotal}</p>
        </div>
    )
}
