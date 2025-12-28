//etape 5 : creation de routage
import Article from './components/Article';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Articles from './components/Articles';
import AddArticle from './components/AddArticles';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
<div className="App">
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Articles />} />
      <Route path='/update/:id' element={<UpdatePost />} />
    </Routes>

  </BrowserRouter>
</div>
  );
}

export default App;