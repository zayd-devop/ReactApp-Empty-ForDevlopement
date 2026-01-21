import { Add_Panier } from '../store/actions2';
import { Update_Qte } from '../store/actions1';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../App.css'; 

export default function Produits() {
    const prods = useSelector(data => data.r_produits.produits || []);
    const panier = useSelector(data => data.r_panier.panier || []);
    const [produits, setProduits] = useState(prods);
    const [qtes, setQtes] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setProduits(prods);
        }, [prods]);
    
    const [trie, setTrie] = useState(0);
    const [prix1, setPrix1] = useState("");
    const [prix2, setPrix2] = useState("");

    function filtrer() {
        const min = Number(prix1);
        const max = Number(prix2) === 0 ? 9999999 : Number(prix2);
        let tb = prods.filter(p => Number(p.price) >= min && Number(p.price) <= max);
        if (trie === '1') tb.sort((a, b) => Number(a.price) - Number(b.price));
        else if (trie === '2') tb.sort((a, b) => Number(b.price) - Number(a.price));
        setProduits(tb);
    }

    function ajouter(id, price, stock) {
        //kanqalbu wash user kteb shi quantite dyal dik product
        const item = qtes.find(q => q.id === id);
        const qte = item ? item.qte : 1; //par default 1 si user n'a rien tape
        const produitReel = prods.find(p => p.id === id);
        const stockReel = produitReel ? produitReel.stock : 0;
        
        if (qte > 0 && qte <= stock) {
            //ajouter l'article dans le panier d'un user
            dispatch(Add_Panier(id, qte));
            //MAJ du stock de produits
            dispatch(Update_Qte(id, qte));
            alert("Produit ajouté au panier !");
        } else {
            alert("Stock insuffisant !");
        }
    }

    return (
        <div className="container">
            {/* filter section */}
            <div className="filters-container">
                <div>
                    <strong>Trier : </strong>
                    <select value={trie} onChange={e => setTrie(e.target.value)}>
                        <option value="0">Défaut</option>
                        <option value="1">Prix Croissant</option>
                        <option value="2">Prix Décroissant</option>
                    </select>
                </div>
                <div>
                    <strong>Prix : </strong>
                    <input type="number" placeholder="Min" onChange={e => setPrix1(e.target.value)} style={{width:'80px'}} />
                    <span> à </span>
                    <input type="number" placeholder="Max" onChange={e => setPrix2(e.target.value)} style={{width:'80px'}} />
                    <button onClick={filtrer} className="btn-add" style={{display:'inline-flex', width:'auto', padding:'8px 20px', marginLeft:'10px'}}>Filtrer</button>
                </div>
            </div>
            {/* End Filter Section */}
            <h1 style={{marginBottom: '20px'}}>Nos Produits</h1>
            {/* Products Section */}
            <div className="products-grid">
                {produits.map(p => (
                    <div className="product-card" key={p.id}>
                        <div className="image-container">
                            <img src={p.image} alt={p.title} className="product-img" />
                        </div>
                        <div>
                            <span className="product-cat">Technologie</span>
                            <h3 className="product-title">{p.title}</h3>
                            {/* prix avec promo */}
                            <div className="price-row">
                                <span className="current-price">{p.price} DH</span>
                                <span className="old-price">{(p.price * 1.2).toFixed(0)} DH</span>
                            </div>
                            {/* gestion visuelle du stock */}
                            <div style={{fontSize: '0.9rem', color: p.stock === 0 ? 'red' : 'green', marginBottom:'10px'}}>
                                {p.stock > 0 ? `En stock : ${p.stock}` : 'Rupture de stock'}
                            </div>
                        </div>
                        <div className="card-actions">
                            {/* Quantity Input  */}
                            <input
                                type="number"
                                className="qty-input"
                                min="1"
                                max={p.stock} //empecher user de saisir plus que stock
                                defaultValue={1}
                                disabled={p.stock === 0}
                                onChange={(e) => {
                                    // verifier si on acceder a cet input 
                                    const val = parseInt(e.target.value);
                                    const existe = qtes.find(q => q.id === p.id);
                                    if (existe) {
                                        //si oui, on MAJ la quantite pour cet id
                                        setQtes(qtes.map(q => q.id === p.id ? { ...q, qte: val } : q)); //pour stocker la quantite individuellement sans bugs ex :[{id: 1, qte: 5}, ...]
                                    } else {
                                        //si, on cree une nouvelle entre pour cet id
                                        setQtes([...qtes, { id: p.id, qte: val }]);
                                    }
                                }}
                            />
                            <button 
                                className="btn-add"
                                onClick={() => ajouter(p.id, p.price, p.stock)}
                                disabled={p.stock === 0} //si pas de stock : disabled et 2 conditions
                            >
                                {p.stock === 0 ? 'Épuisé' : 'Ajouter au panier'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}