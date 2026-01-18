import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data";
function App() {
  const [selectedCategory,setSelectedCategory]=useState(null);
  //------input filter ------------//
  const [query,setQuery] =useState('');
  const handleInputChange = e => {
    setQuery(e.target.value)
  }
  const filteredItems = data.filter(p => p.title.toLowerCase().indexOf(query.toLowerCase()!== -1));
  //------Radio filter ------------//
  const handleRadioChange = e =>{
    setSelectedCategory(e.target.value)
  }
  //------Buttons filter ------------//
  const handleClick = e => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products,selected,query) {
    let filteredProducts = products;
  //------filtering input items ------------//
  if (query) {
    filteredProducts = filteredItems;
  }
  //------Selected (radio) filter ------------//
  if(selected) {
    filteredProducts = filteredProducts.filter(({ category,color,company,newPrice,title })=> category === selected ||color === selected || company === selected || newPrice === selected || title ===selected)
  }
  return filteredProducts.map(({ }))
  }

  return (
    <div>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>    
    </div>
  );
}

export default App;