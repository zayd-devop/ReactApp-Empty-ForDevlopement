import { BrowserRouter,Route,Routes } from "react-router-dom";
import ListEmploye from "./Employe/ListEmploye";
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmploye />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
