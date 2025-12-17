import react from "react";

export default function EventItem ({list,onDelete}){
    return (
    <div>
        <h2>Liste Des Evenements</h2>
        <div>
           { 
           list.map((ev) => (
            <div key={ev.id}>
                <p>{ev.title}</p>
                <p>{ev.date}</p>
                <p>{ev.description} - {ev.location}</p>
                <button onClick={()=>onDelete(ev.id)}>Supprimer</button>
            </div>
            ))}
        </div>
    </div>
    )
}