import { useState, useEffect } from "react";

function App() {
  const [utilisateurs,setUtilisateurs] = useState([]);
  const [articles,setArticles] = useState([]);
  const [userActif,setUserActif] = useState(0); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {return res.json()})
    .then((users) => {setUtilisateurs(users)})
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {return res.json()})
    .then((data) => {setArticles(data)})
  },[])
  function handleClick(id) {
    setUserActif(id)
  }
  return (
    <div className="App">
      {
      utilisateurs.map((utilisateur,index) => {
      return <p key={index} >{utilisateur.name} 
      <button onClick={() => handleClick(utilisateur.id)}>Details articles</button>
      <div>
        {
          userActif === utilisateur.id
          ?<ul> {
            articles.filter((item) => item.userId === parseInt(userActif)).map((article) => {
          return <li>{article.id} {article.title} </li>})
          }
           </ul>
          :null
        }
      </div>
      </p> 
    })
    
      }
    </div>
  );
}

export default App;
