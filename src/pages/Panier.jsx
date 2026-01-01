import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';

export default function Cart() {
    const panier = useSelector(state => state.prd.cart);
    const total = panier.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div>
            <h2>Panier</h2>
            {panier.length === 0 ? (
                <div>
                    <NavBar></NavBar>
                <p>Le panier est vide.</p>
                </div>
            ) : (
                <div>
                    <NavBar></NavBar>
                    <table>
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Prix Unitaire</th>
                                <th>Quantité</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {panier.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price} </td>
                                    <td>x {item.quantity}</td>
                                    <td>{item.price * item.quantity} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        Total à payer : {total}
                    </div>
                </div>
            )}
        </div>
    );
}