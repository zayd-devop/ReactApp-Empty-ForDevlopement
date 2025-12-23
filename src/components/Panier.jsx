import { Add_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
export default function Produits (){
    //pour afficher la liste 
const produits = useSelector(data => data.r_produits.produits || []);    
const panier = useSelector(data => data.r_panier.panier || []);    

const  [qte,setQte] = useState(0);
const dispatch=useDispatch();
const[qteTotal,setQteTotal] = useState(panier.reduce((total,p)=>total+parseInt(p.qte_cmd),0));
const [prixTotal,setPrixTotal] = useState(panier.reduce((total,p)=>total+parseInt(p.qte_cmd)*(produits.find(prd=>prd.id==p.id)).price,0));
    function ajouter(id,price){
        const quantiteValide = Number(qte) || 1;
        dispatch(Add_Panier(id,quantiteValide))
        dispatch(Update_Qte(id,quantiteValide))
        setQteTotal(qteTotal+quantiteValide)
        setPrixTotal(prixTotal+(price*quantiteValide))
    }
    return (
        <div>
            <h1>Contenu de panier</h1>
            <table>
            {
                panier.map(p=> {
                    const prd=produits.find(pr=>pr.id==p.id)
                    return (
                    <tr key={p.id}>
                        <td>{prd.title}-  {prd.price} - {prd.stock}</td>
                        <td><img src={prd.image}width={60} height={40} alt="" /></td>
                        <td>Qte :<input type="number" value={p.qte_cmd} /></td>
                        <td><button >Supprimer</button><button>Modifier</button></td>
                    </tr>)}
                )
            }
            </table>
            <p>Qte : {qteTotal}</p>
            <p>Prix Total : {prixTotal}</p>
        </div>
    )
}