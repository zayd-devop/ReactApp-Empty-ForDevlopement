//etape 5 : creation de routage
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Users from './components/Users';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
<div className="App">
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/update/:id' element={<UpdateUser />} />
    </Routes>

  </BrowserRouter>
</div>
  );
}

export default App;