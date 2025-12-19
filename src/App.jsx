import Produits from "./components/Produits";
import Panier from "./components/Panier";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
<div className="App">
<Routes>
  <Route path='/' element={<Produits/>}></Route>
  <Route path='/panier' element={<Panier/>}></Route>
</Routes>
</div>
  );
}

export default App;