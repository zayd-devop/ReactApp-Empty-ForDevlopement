import React,{useState} from "react";
import AddEvent from "./components/AddEvent";
import EventItem from "./components/EventItem";
import Header from "./components/Header";
function App() {
  const [evenements,setEvenements] = useState([
    {'id':1,'title':'Photographie','description':'','date':'19/12/2025','lieu':'Tanger','type':'atelier'},
    {'id':2,'title':'Machine Learning','description':'Machine Learning','date':'27/12/2025','location':'a distance','type':'conference'}
  ]);
  const [page,setPage]= useState('Tout les evenements');
  const supprimer = (id) => setEvenements(evenements.filter(ev=>ev.id !==id));
  const ajouter = (nouveau) => setEvenements([...evenements,nouveau]);
  return (
    <React.StrictMode>
    <Header></Header>
<div className="App">
  <button onClick={()=>setPage('Tous les evenements')}>Tous les events</button>
  <button onClick={()=>setPage('Ajouter Evenement')}>Add Event</button>
  <div>
    {page ==='Tous les evenements' && <EventItem list={evenements} onDelete={supprimer}/>}
    {page ==='Ajouter Evenement' && <AddEvent onAdd={ajouter}/>}
  </div>
</div>
</React.StrictMode>
  );
}

export default App;