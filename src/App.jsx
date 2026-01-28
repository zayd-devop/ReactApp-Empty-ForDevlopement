import Navbar from "./components/Navbar"; // Import Navbar
import { Routes, Route } from 'react-router-dom';
import Accueil from "./components/Accueil";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    
    <div className="App">
      <Navbar /> 
        <Routes>
          <Route path='/accueil' element={<Accueil/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;