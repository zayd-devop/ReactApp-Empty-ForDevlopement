import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreerRecetteAction } from '../store/actions';
import Menu from './Menu';


export default function AjouterRecettes () {
    const theme = useSelector(state => state.theme);
    const recettes = useSelector(state => state.recettes);
    const dispatch = useDispatch();

    const [nom, setNom] = useState('');
    const [themeNom, setThemeNom] = useState(''); 
    const [temps, setTemps] = useState('');
    const [methode, setMethode] = useState('');

    const themeActif = theme.find(t => t.nom === themeNom);

    const handleAjouter = (e) => {
        e.preventDefault();
        const recetteExistante = recettes.find(r => r.nom === nom);
        let nouvelleRecette={};
        if (recetteExistante) {
            nouvelleRecette = {
                code: recetteExistante.code,
                nom: nom,
                theme: themeNom,
                temps: temps,
                preparation: methode
            };
            alert("recette modifie avec succes ");
        } else {
            nouvelleRecette = {
                code: Date.now(), 
                nom: nom,
                temps: temps,
                theme: themeNom,
                preparation: methode
            };
            alert("recette ajoute avec succees!");
        }
        dispatch(CreerRecetteAction(nouvelleRecette));
    };
    return (
        <div>
            <Menu></Menu>
            <h2>Creer Recette</h2>
                <div>
                    <label>Nom de la recette :</label>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
                </div>
                <div>
                    <label>Thème :</label>
                    <select  value={themeNom} onChange={(e) => setThemeNom(e.target.value)}>
                        <option value="">choisir un theme</option>
                        {theme.map((t, index) => (
                            <option key={index} value={t.nom}>
                                {t.nom}
                            </option>
                        ))}
                    </select>
                </div>
                {themeActif && (
                    <p>Description : {themeActif.description}</p>
                )}
                <div>
                    <label>Temps de preparation :</label>
                    <input type="text" value={temps} onChange={(e) => setTemps(e.target.value)} />
                </div>
                <div>
                    <label>Methode de preparation :</label>
                    <textarea rows="4"value={methode} onChange={(e) => setMethode(e.target.value)} />
                </div>
                <button onClick={handleAjouter}>Creer</button>
        </div>
    );
}