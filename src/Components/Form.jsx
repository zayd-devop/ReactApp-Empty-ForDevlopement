//1.Structure generale du form avec declaration useState pour les inputs
//2.ajouter onChange pour Chaque input 
//3.pour checkbox handleCheckbox
//handleSubmit for validate form

import { use, useState } from "react";

export default function Form () {
    const [id,setId] = useState('')
    const [mdp,setMdp] = useState('')
    const [dateN,setDatN] = useState('')
    const [ville,setVille] = useState('')
    //type radio
    const [genre,setGenre] = useState('');
    //type checkbox
    const [loisirs,setLoisirs] = useState([]);
    //pour checkbox
    function handleLoisirs (e) {
        if(!loisirs.includes(e.target.value)) {
            setLoisirs([...loisirs, e.target.value]);
        } else {
             setLoisirs([...loisirs.filter((item)=>item !==e.target.value)]);
        }
    }
    function handleSubmit (e) {
        e.preventDefault(); 
        alert (`Je suis ${id} né le ${dateN} à ${ville} et mes loisirs sont : ${loisirs.join(', ')}`)
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <p>
                <label>Identifiant</label>
                <input type="text" name="identifiant" onChange={(e)=>setId(e.target.value)}/>
            </p>
            <p>
                <label>Mot de Passe</label>
                <input type="password" name="pwd" onChange={(e)=>setMdp(e.target.value)}/>
            </p>
            <p>
                <label>Date de naissance</label>
                <input type="date" name="DateN" onChange={(e)=>setDatN(e.target.value)} />
            </p>
            <p>
                <label>Ville</label>
                <select name="ville" onChange={(e)=>setVille(e.target.value)}>
                    <option>Choisir une ville</option>
                    <option value="Tanger">Tanger</option>
                    <option value="Tetouan">Tetouan</option>
                </select>
            </p>
            <p>
                <label>Genre</label>
                <input type="radio" name="genre" value='Homme' onChange={(e)=>setGenre(e.target.value)} />Homme
                <input type="radio" name="genre" value='Femme' onChange={(e)=>setGenre(e.target.value)}/>Femme
            </p>
            <p>
                <label>Loisirs</label>
                <input type="checkbox" value='Sport' name="loisirs" onChange={(e)=>handleLoisirs(e)}/>Sport
                <input type="checkbox" value='Lecture' name="loisirs" onChange={(e)=>handleLoisirs(e)}/>Lecture
                <input type="checkbox" value='Musique' name="loisirs" onChange={(e)=>handleLoisirs(e)}/>Musique
            </p>
            <p>
                <button>S'inscrire</button>
            </p>
        </form>
    )
}