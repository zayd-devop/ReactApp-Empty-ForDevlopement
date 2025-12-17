import React,{useState} from "react";

export default function AddEvent({onAdd}) {
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [location,setLocation] = useState('');
    const [conference,setConference] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            title : title,
            description : description,
            date : date,
            location : location,
            conference : conference
            
        };
        onAdd(newEvent);
        alert('Event added with success !');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title" onChange={(e)=> setTitle(e.target.value)} />
                <input type="date" name="date" onChange={(e)=> setDate(e.target.value)} />
                <input type="text" name="location" placeholder="location" onChange={(e)=> setLocation(e.target.value)} />
                <select name="Conference" onChange={(e)=>setConference(e.target.value)}>
                    <option value="Conference">Conference</option>
                    <option value="atelier">atelier</option>
                    <option value="conference">conference</option>
                    <option value="Personnel">Personnel</option>
                    <option value="location">location</option>
                </select>
                <input type="text" name="description" placeholder="Description" onChange={(e)=> setDescription(e.target.value)} />
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    )
}