import { Add_Panier, Delete_Panier, Update_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Produits() {
    const produits = useSelector(data => data.r_produits.produits || []);
    const panier = useSelector(data => data.r_panier.panier || []);

    const [qtes, setQtes] = useState([]);
    const dispatch = useDispatch();
    
    // Ideally, calculate these directly from 'panier' using useMemo/variables instead of state
    // but keeping your logic for now:
    const [qteTotal, setQteTotal] = useState(panier.reduce((total, p) => total + parseInt(p.qte_cmd), 0));
    const [prixTotal, setPrixTotal] = useState(panier.reduce((total, p) => total + parseInt(p.qte_cmd) * (produits.find(prd => prd.id == p.id) || {}).price, 0));

    function supprimer(id, qte_cmd, price) {
        dispatch(Delete_Panier(id));
        dispatch(Update_Qte(id, -1 * qte_cmd));
        setQteTotal(qteTotal - qte_cmd);
        setPrixTotal(prixTotal - (price * qte_cmd));
    }

    function modifier(id, qte_cmd, price) {
        // 1. Find the new quantity input
        const inputObj = qtes.find(q => q.id == id);

        // 2. Safety Check: If user clicked modifier without typing anything
        if (!inputObj) {
            alert("Veuillez changer la quantité d'abord");
            return; 
        }

        const qte = inputObj.qte; // This is safe now

        dispatch(Update_Panier(id, qte));
        dispatch(Update_Qte(id, qte - parseInt(qte_cmd)));
        
        const qte_diff = qte - qte_cmd;
        setQteTotal(qteTotal + qte_diff);
        setPrixTotal(prixTotal + (price * qte_diff));
    }

    // New helper to handle input changes cleanly without direct mutation
    const handleInputChange = (e, pid) => {
        const val = parseInt(e.target.value);
        setQtes(prevQtes => {
            const exists = prevQtes.find(q => q.id === pid);
            if (exists) {
                // Update existing item immutably
                return prevQtes.map(q => q.id === pid ? { ...q, qte: val } : q);
            } else {
                // Add new item (FIXED TYPO HERE: 'qt' -> 'qte')
                return [...prevQtes, { id: pid, qte: val }];
            }
        });
    }

    return (
        <div>
            <h1>Contenu de panier</h1>
            <table>
                <tbody>
                    {panier.map(p => {
                        const prd = produits.find(pr => pr.id == p.id);
                        // Safety check in case product is not found
                        if (!prd) return null; 
                        
                        return (
                            <tr key={p.id}>
                                <td>{prd.title} - {prd.price} - {prd.stock}</td>
                                <td><img src={prd.image} width={60} height={40} alt="" /></td>
                                <td>
                                    Qte :
                                    <input 
                                        type="number" 
                                        onChange={(e) => handleInputChange(e, p.id)} 
                                        defaultValue={p.qte_cmd}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => supprimer(p.id, p.qte_cmd, prd.price)}>Supprimer</button>
                                    <button onClick={() => modifier(p.id, p.qte_cmd, prd.price)}>Modifier</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p>Qte : {qteTotal}</p>
            <p>Prix Total : {prixTotal}</p>
        </div>
    )
}