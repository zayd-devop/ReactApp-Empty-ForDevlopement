import { Add_Panier, Delete_Panier, Update_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
export default function Produits (){
    //pour afficher la liste 
const produits = useSelector(data => data.r_produits.produits || []);    
const panier = useSelector(data => data.r_panier.panier || []);    

const  [qtes,setQtes] = useState([]);
const dispatch=useDispatch();
const[qteTotal,setQteTotal] = useState(panier.reduce((total,p)=>total+parseInt(p.qte_cmd),0));
const [prixTotal,setPrixTotal] = useState(panier.reduce((total,p)=>total+parseInt(p.qte_cmd)*(produits.find(prd=>prd.id==p.id)).price,0));

            function supprimer (id,qte_cmd,price){
            dispatch(Delete_Panier(id));
            dispatch(Update_Qte(id,-1*qte_cmd))
            setQteTotal(qteTotal-qte_cmd)
            setPrixTotal(prixTotal-(price*qte_cmd))
        }
        function modifier (id,qte_cmd,price) {
             const qte =qtes.find(q=>q.id==id).qte
            dispatch(Update_Panier(id,qte))
            dispatch(Update_Qte(id,qte-parseInt(qte_cmd)))
            const qte_diff = qte-qte_cmd;
            setQteTotal(qteTotal+qte_diff)
            setPrixTotal(prixTotal+(price*qte_diff))
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
                        <td>Qte :<input type="number" onChange={(e)=>{
                                  const obj =qtes.find(q=>q.id==p.id)
                                  if(obj)
                                    obj.qte= parseInt(e.target.value)
                                else
                            setQtes([...qtes,{ id:p.id,qt: parseInt(e.target.value)}])}
                        } /></td>
                        <td><button onClick={()=>supprimer(p.id,p.qte_cmd,prd.price)} >Supprimer</button><button onClick={()=>modifier(p.id,p.qte_cmd,prd.price)}>Modifier</button></td>
                    </tr>)}
                )
            }
            </table>
            <p>Qte : {qteTotal}</p>
            <p>Prix Total : {prixTotal}</p>
        </div>
    )
}