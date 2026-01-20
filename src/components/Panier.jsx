import { Delete_Panier, Update_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'; 

export default function Panier() {
    const produits = useSelector(data => data.r_produits.produits || []);
    const panier = useSelector(data => data.r_panier.panier || []);
    const [qtes, setQtes] = useState([]);
    const dispatch = useDispatch();

    const [qteTotal, setQteTotal] = useState(panier.reduce((total, p) => total + parseInt(p.qte_cmd), 0));
    const [prixTotal, setPrixTotal] = useState(panier.reduce((total, p) => total + parseInt(p.qte_cmd) * (produits.find(prd => prd.id == p.id) || {}).price, 0));
// fonction supprimer
    function supprimer(id, qte_cmd, price) {
        dispatch(Delete_Panier(id));
        //Si Update_Qte(id, 5) kat7ayed 5 mn stock, alors Update_Qte(id, -5) en AJOUTE 5.
        dispatch(Update_Qte(id, -1 * qte_cmd));
        // MAJ Locale,kanaqssu mubashara les montants
        setQteTotal(qteTotal - qte_cmd);
        setPrixTotal(prixTotal - (price * qte_cmd));
    }
// fonction modifier
    function modifier(id, qte_cmd, price, stockRestant) {
        //recuperer la nouvelle valeur que user a saisit
        const inputObj = qtes.find(q => q.id == id);
        //si user clique sur modifier sans rien change
        if (!inputObj) {
            alert("Veuillez changer la quantité d'abord");
            return;
        }
        // la quantite saisit par user
        const newQte = inputObj.qte;
        // ex : ida kan andi 2 d les articles o bghit 5 donc anhuz 3 akhrin mn stock
        // ex2: ida kan andi 5 d les articles o bghit 2 donc ghanrod 3 d les articles n stock
        const diff = newQte - qte_cmd;
        //  verification du stock
        // verifier wash stock kafi pour couvrir la difference necessaire
        if (diff > 0 && diff > stockRestant) {
            alert(`Stock insuffisant ! Il reste ${stockRestant} pièces.`);
            return;
        }
        // si tout est bien :
        // MAJ du panier
        dispatch(Update_Panier(id, newQte));
        // ajuster le stock(ex:ghan7aydo 3 akhrin)
        dispatch(Update_Qte(id, diff));
        // MAJ totale
        setQteTotal(qteTotal + diff);
        setPrixTotal(prixTotal + (price * diff));
    }
    // // Gestion standard des inputs
    const handleInputChange = (e, pid) => {
        const val = parseInt(e.target.value);
        setQtes(prevQtes => {
            const exists = prevQtes.find(q => q.id === pid);
            if (exists) return prevQtes.map(q => q.id === pid ? { ...q, qte: val } : q);
            else return [...prevQtes, { id: pid, qte: val }];
        });
    }

    return (
        <div className="cart-container">
            <h1 style={{margin: '30px 0'}}>Mon Panier</h1>
            {panier.length === 0 ? <p>Votre panier est vide.</p> : (
                <div>
                    {panier.map(p => {
                        const prd = produits.find(pr => pr.id == p.id);
                        if (!prd) return null;
                        return (
                            <div className="cart-item" key={p.id}>
                                <div className="cart-img-container">
                                    <img src={prd.image} alt={prd.title} className="cart-img" />
                                </div>
                                <div className="cart-info">
                                    <h3 className="cart-title">{prd.title}</h3>
                                    <div className="cart-price">{prd.price} DH</div>
                                    <small style={{color: '#777'}}>Stock restant : {prd.stock}</small>
                                </div>
                                <div className="cart-actions">
                                    <input
                                        type="number"
                                        className="qty-input"
                                        min="1"
                                        max={p.qte_cmd + prd.stock}
                                        onChange={(e) => handleInputChange(e, p.id)}
                                        defaultValue={p.qte_cmd}
                                    />
                                    <button 
                                        className="cart-btn-mod"
                                        onClick={() => modifier(p.id, p.qte_cmd, prd.price, prd.stock)}
                                    >
                                        Modifier
                                    </button>
                                    <button 
                                        className="cart-btn-del"
                                        onClick={() => supprimer(p.id, p.qte_cmd, prd.price)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="cart-summary">
                        <h3>Total Articles : {qteTotal}</h3>
                        <div className="total-price">Total : {prixTotal.toFixed(2)} DH</div>
                        <button className="btn-add" style={{marginTop:'20px', width:'100%'}}>Passer la commande</button>
                    </div>
                </div>
            )}
        </div>
    )
}