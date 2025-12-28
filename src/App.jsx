import { Routes,Route } from "react-router-dom"
import Articles from "./Articles"
import UpdateArticle from "../components/UpdateArticle"

const App=()=>{
  return (

   <Routes>
      <Route path="/" element={<Articles/>}></Route>
      <Route path="/update/:id" element={<UpdateArticle/>}></Route>

   </Routes>
  )
}
export default App