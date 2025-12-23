import { Add_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import { use, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {Link} from 'react-router-dom'
export default function Produits (){
    //pour afficher la liste 
const prods = useSelector(data => data.r_produits.produits || []);    
//pour filtre et trie
    const  [produits,setProduits] =useState(prods);
    const  [qtes,setQtes] = useState([]);
    const dispatch=useDispatch();
    const[qteTotal,setQteTotal] = useState(0);
    const [prixTotal,setPrixTotal] = useState(0);
    const[trie,setTrie]=useState(0);
    const [prix1,setPrix1]=useState(0);
    const [prix2,setPrix2]=useState(0);
    //pour filtrer et trie
function filtrer (){
        const min = Number(prix1);
        const max = Number(prix2) === 0 ? 9999999 : Number(prix2);
        
        let tb = prods.filter(p => Number(p.price) >= min && Number(p.price) <= max);
        if (trie === '1') {
            tb.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (trie === '2') { 
            tb.sort((a, b) => Number(b.price) - Number(a.price));
        }
        setProduits(tb); 
    }

    function ajouter(id,price){
      const item = qtes.find(q => q.id == id);
        const qte = item ? item.qte : 1; 
        if (qte > 0) {
            dispatch(Add_Panier(id, qte));
            dispatch(Update_Qte(id, qte));
            setQteTotal(qteTotal + qte);
            setPrixTotal(prixTotal + (price * qte));
        
    
    }
}

    return (
        <div>
            <div>
                Trier Par :
                <select value={trie} onChange={e=>setTrie(e.target.value)}>
                    <option value="0">Par Default</option>
                    <option value="1">Prix Croissant</option>
                    <option value="2">Prix Decroissant</option>
                </select>
                Filter par prix entre  :
                <input type="number" onChange={e=>setPrix1(e.target.value)}/>
                et
                <input type="number" onChange={e=>setPrix2(e.target.value)} />
                <button onClick={filtrer}>Filtrer</button>

            </div>
            <h1>Liste des produits</h1>
            <table>
            {
                produits.map(p=>
                    <tr key={p.id}>
                        <td>{p.title}-  {p.price} - {p.stock}</td>
                        <td><img src={p.image}width={60} height={40} alt="" /></td>
                        <td>Qte :<input type="number" onChange={(e)=>{
                                  const val = parseInt(e.target.value) || 0;
                                        const existe = qtes.find(q => q.id == p.id);
                                        if (existe) {
                                            setQtes(qtes.map(q => q.id === p.id ? { ...q, qte: val } : q));
                                        } else {
                                            setQtes([...qtes, { id: p.id, qte: val }]);}}}
                                         /></td>
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