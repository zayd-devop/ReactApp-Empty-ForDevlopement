import { useState } from "react";
import AddMatchForm from "./components/AddMatchForm";
import MatchDetails from "./components/MatchDetails";
import MatchList from "./components/MatchList";
import { Route,Routes } from "react-router-dom";
function App() {
  const initialMatchs = [
  {id: 1, name: 'Maroc vs Argentine', matchDay: '2030-02-15', location: 'Casablanca'},
  {id: 2, name: 'Brésil vs Palestine', matchDay: '2030-02-18', location: 'Rabat'}
  ]
  const [matches,setMatches] = useState(initialMatchs)
const ajouter = (newMatch) => setMatches([...matches,newMatch])  
  return (
    <Routes>
      <Route path='/' element={<MatchList matches={matches}/>}/>
      <Route path='/add' element={<AddMatchForm onAdd={ajouter}/>}/>
      <Route path='/details/:id' element={<MatchDetails matches={matches}/>}/>
    </Routes>
  );
}

export default App;
