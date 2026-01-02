import { useSelector } from "react-redux"
import Menu from "./Menu"
export default function AfficherRecettes () {
    const recettes = useSelector(state=>state.recettes)
    
    return (
        <div>
            <Menu></Menu>
            <h1>Tous Les Recettes</h1>
            <div>
                {recettes.map((r,index)=> {
                    return (
                        <div key={index}>
                            <p>Nom de Recette : {r.nom}</p>
                            <p>Theme : {r.theme}</p>
                            <p>Temps : {r.temps}</p>
                            <p>Methode : {r.preparation}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}