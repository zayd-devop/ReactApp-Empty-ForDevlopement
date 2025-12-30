//etape 6:Créer les routes nécessaires dans le composant App.

import { useSelector } from "react-redux";
import { Routes,Route } from "react-router-dom";
import Authentification from "./components/Authentification";
import Historique from "./components/Historique";
import Chambres from "./components/Chambres";
import Reservation from "./components/Reservation";


function App() {
  // • Le client doit s’authentifier avant d’accéder à l’application.
const { userConnected } = useSelector((state) => state.hotel);  
return (
<Routes>
  <Route path="/" element={<Authentification />} />
  <Route path="/historique/:idClient" element={userConnected?<Historique />:<Authentification/>} />
  <Route path="/chambres/:idClient" element={userConnected?<Chambres />:<Authentification/>} />
  <Route path="/reservation/:idClient/:idChambre" element={userConnected?<Reservation/> :<Authentification/> } />
</Routes>
  );
}
export default App;