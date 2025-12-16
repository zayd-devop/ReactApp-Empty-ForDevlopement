import { Route } from "react-router-dom"

// 1. index jsx
<BrowserRouter>
<App>
</BrowserRouter>
{/* 2.app.jsx */}
{/* Ajouter au composants : */}
<Routes>
    <Route path='/' element={homeComponent} />
    {/* envoyer l'id */}
    <Route path="/product/:id"  element={single} />
</Routes>