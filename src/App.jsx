import React from "react";
import { Routes,Route } from "react-router-dom";
import AjouterRecettes from "./components/AjouterRecettes";
import AfficherRecettes from "./components/AfficherRecettes";
import Menu from "./components/Menu";

export default function App(){
    return(
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path='/ajouter-recettes' element={<AjouterRecettes/>}/>
        <Route path='/afficher-recettes' element={<AfficherRecettes />} />
      </Routes>
    )
}