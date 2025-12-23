import { Routes,Route, BrowserRouter } from "react-router-dom"
import Articles from "./containers/Articles"
import UpdateArticle from "./components/UpdateArticle"

const App=()=>{
  return (
<BrowserRouter>
   <Routes>
      <Route path="/" element={<Articles/>}></Route>
      <Route path="/update/:id" element={<UpdateArticle/>}></Route>

   </Routes>
   </BrowserRouter>
  )
}
export default App