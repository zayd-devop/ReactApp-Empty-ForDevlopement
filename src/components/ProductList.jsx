// src/components/ProductList.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { productsData } from '../data';

const ProductList = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('default');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    dispatch(addToCart({ ...product, quantity: Number(qty) }));
  };

  const getFilteredProducts = () => {
    let filtered = [...productsData];
    if (minPrice) filtered = filtered.filter(p => p.price >= Number(minPrice));
    if (maxPrice) filtered = filtered.filter(p => p.price <= Number(maxPrice));
    if (sortOrder === 'asc') filtered.sort((a, b) => a.price - b.price);
    if (sortOrder === 'desc') filtered.sort((a, b) => b.price - a.price);
    return filtered;
  };

  return (
    <div className="container">
      
      {/* --- SECTION HERO AVEC IMAGE WELCOME --- */}
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark text-center" 
           style={{ 
             backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", 
             backgroundSize: 'cover', 
             backgroundPosition: 'center',
             position: 'relative'
           }}>
        
        {/* Un petit calque noir semi-transparent pour qu'on lise bien le texte */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 'inherit' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Welcome to the Shop</h1>
          <p className="lead my-3">Le meilleur équipement pour les développeurs Fullstack.</p>
        </div>
      </div>
      {/* --------------------------------------- */}

      {/* BARRE DE FILTRES */}
      <div className="card mb-4 p-3 bg-light border-0 shadow-sm">
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <label className="form-label fw-bold">Trier par :</label>
            <select className="form-select" onChange={(e) => setSortOrder(e.target.value)}>
              <option value="default">Par défaut</option>
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
            </select>
          </div>
          <div className="col-md-8">
            <label className="form-label fw-bold">Filtrer par prix :</label>
            <div className="input-group">
              <span className="input-group-text">Min</span>
              <input type="number" className="form-control" onChange={(e) => setMinPrice(e.target.value)} />
              <span className="input-group-text">Max</span>
              <input type="number" className="form-control" onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-3 text-primary border-bottom pb-2">Nos Produits</h2>

      {/* LISTE DES PRODUITS */}
      <div className="row">
        {getFilteredProducts().map((product) => (
          <div key={product.id} className="col-12 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center flex-wrap">
                <div className="flex-shrink-0">
                  <img src={product.image} alt={product.title} className="img-fluid rounded" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">{product.title}</h5>
                  <p className="text-primary fw-bold fs-5 mb-0">{product.price} MAD</p>
                </div>
                <div className="d-flex align-items-center mt-3 mt-md-0">
                  <div className="input-group me-2" style={{ width: '120px' }}>
                    <input 
                      type="number" 
                      className="form-control text-center" 
                      min="1" 
                      defaultValue="1"
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    />
                  </div>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => handleAddToCart(product)}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;