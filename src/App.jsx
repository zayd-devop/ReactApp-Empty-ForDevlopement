import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (

<Routes>
  <Route path="/accueil" element={<Navbar/>} />
</Routes>
  );
}

export default App;