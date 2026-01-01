import { Routes,Route } from "react-router-dom";
import Inscription from "./pages/Inscription";
import Login from "./pages/Login";
import Accueil from "./pages/Accueil";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Panier from "./pages/Panier";



function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/accueil" element={<Accueil/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/cart" element={<Panier/>} />
        {/* <Route path="/about" element={<About/>} /> */}
        <Route path='/inscription' element={<Inscription/>} />
    </Routes>
  );
}

export default App;