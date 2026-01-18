import Produits from "./components/Produits";
import Panier from "./components/Panier";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar"; // Import Navbar
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

function App() {
const isAuth = useSelector(state => state.r_auth.isAuth);
  return (
    
    <div className="App">
      <Navbar /> 
      
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path='/' element={isAuth?<Produits />:<Login/>}></Route>
          <Route path='/panier' element={isAuth?<Panier />:<Login/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;