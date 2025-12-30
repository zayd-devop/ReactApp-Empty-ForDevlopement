//etape 6:Créer les routes nécessaires dans le composant App.

import { useSelector } from "react-redux";


function App() {
  // • Le client doit s’authentifier avant d’accéder à l’application.
  const users=useSelector()
  return (
<Routes>
  <Route path="/" element={<Authentification />} />
  <Route path="/historique/:idClient" element={<Historique />} />
  <Route path="/chambres/:idClient" element={<Chambres />} />
  <Route path="/reservation/:idClient/:idChambre" element={<Reservation/>} />
</Routes>
  );
}
export default App;