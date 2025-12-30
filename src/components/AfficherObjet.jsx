//affichage d'un objet

export default function object(props) {
    return (
        
        <div>
            <h1>{props.objects.champ1}</h1>
            <p>{props.objects.champ2}</p>
        </div>
    )
}