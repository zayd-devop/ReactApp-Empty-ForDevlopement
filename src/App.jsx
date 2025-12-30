//etape 5 : creation de routage
import Article from './components/Article';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AfficherTous from './components/AfficherTous';
import AddComponent from './components/ajouter';
import UpdateComponent from './components/UpdatePost';

function App() {
  return (
<div className="App">
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AfficherTous />} />
      <Route path='/update/:id' element={<UpdateComponent />} />
    </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;