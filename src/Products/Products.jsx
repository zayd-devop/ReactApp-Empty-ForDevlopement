import React from 'react'
import './Products.css'
import Card from '../components/Card';
import data from '../db/data';
export default function Products() {
  return (
    <section className="card-container">
      {data.map((product, index) => (
        <Card 
          key={index} 
          img={product.img}
          title={product.title}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
        />
      ))}
    </section>
  );
}
