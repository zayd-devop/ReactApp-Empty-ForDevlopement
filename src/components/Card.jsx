import React from 'react';
import { BsFillBagHeartFill } from "react-icons/bs"; // N'oublie pas: npm install react-icons

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        
        <section className="card-reviews">
          {/* J'ai ajouté le span rating-stars pour que ta couleur jaune s'applique */}
          <span className="rating-stars">{star}</span> 
          <span className="rating-stars">{star}</span> 
          <span className="rating-stars">{star}</span> 
          <span className="rating-stars">{star}</span> 
          <span className="total-reviews">{reviews}</span>
        </section>
        
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>
          
          {/* L'icône du panier qui correspond à ta classe .bag-icon */}
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;