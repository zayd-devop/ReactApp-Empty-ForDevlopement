//etape 5 : creation de routage
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
function App() {
  return (
<div className="App">
  <h1>REDUX CRUD APP</h1>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserList/>} />
      <Route path='/add-user' element={<AddUser/>} />
      <Route path='/update/:id' element={<UpdateUser/>} />
    </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;