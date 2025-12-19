// src/components/Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [editQuantities, setEditQuantities] = useState({});

  const handleLocalChange = (id, value) => {
    setEditQuantities({ ...editQuantities, [id]: value });
  };

  const handleUpdate = (item) => {
    const newQty = editQuantities[item.id] ? Number(editQuantities[item.id]) : item.quantity;
    dispatch(updateQuantity({ id: item.id, quantity: newQty }));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Contenu du panier</h2>

      {cart.cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Votre panier est vide. <Link to="/" className="alert-link">Retourner aux produits</Link>.
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="table-responsive shadow-sm rounded">
              <table className="table table-hover align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.title} className="rounded me-2" style={{ width: '50px' }} />
                          <span className="fw-bold">{item.title}</span>
                        </div>
                      </td>
                      <td>{item.price} MAD</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          style={{ width: '80px' }}
                          min="1"
                          defaultValue={item.quantity}
                          onChange={(e) => handleLocalChange(item.id, e.target.value)}
                        />
                      </td>
                      <td>
                        <button 
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleUpdate(item)}
                        >
                          Modifier
                        </button>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Résumé du total */}
          <div className="col-12 mt-4">
            <div className="card shadow-sm border-0 bg-light">
              <div className="card-body text-center">
                <h4 className="card-title">Résumé de la commande</h4>
                <p className="card-text fs-5">Quantité totale : <strong>{cart.totalQuantity}</strong></p>
                <h3 className="text-primary mb-3">Total à payer : {cart.totalAmount.toFixed(2)} MAD</h3>
                <button className="btn btn-success btn-lg px-5">Commander</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;