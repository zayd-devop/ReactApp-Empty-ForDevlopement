1. Question 1 : Donner la commande qui permet de créer le squelette d'une application react
    `npx create-react-app application-react`
2. Question 2 : Donner la commande qui permet d'exécuter une application react
    `npm start`
3. Question 3 : Donner les commandes qui vont permettre l'installation des packages suivant
    - Redux :
    `npm install redux react-redu`
    - React Router :
    `npm install react-router-dom`
4. Question 4 :  Ecrire le code du programme pour créer un store redux
    `import { legacy_createStore as createStore } from 'redux';`
    `import employeReducer from './reducer'; // Supposons que le reducer est défini dans un autre fichier`
    `const store = createStore(employeReducer);`
    `export default store;`
5. Question 5 :  Réécrire le code du programme index.js, pour prendre en compte le store de redux crée dans la question précédente

<h1>Dans index.js</h1>
    import ReactDOM from 'react-dom/client';
    import App from'./App';
    import {Provider} from 'react-redux'
    import store from './redux/store'
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
        <Privider store ={store}>
        <App />
        </React.StrictMode> 
    );

6. Question 6 : Ecrire le code du store qui va contenir un tableau des employées. (4 points) :
Ajouter une action pour ajouter un nouvel employé dans la liste des employés.

    - Dans redux/store/reducer.jsx

        const initialState = ({
            employes: [
                {
                    image: "http://www.ofppt.ma/employe1.jpg",
                    nom: "Zaid",
                    prenom: "Riyad",
                    fonction: "Ingenieur"
                },
            ]
        })
        const reducer = (state=initialState, action) => {
            switch(action.type) {
                case ADD_EMPLOYE :
                    return {...state,employes :[...state,action.payload]}
                default : return state
            }
        }
        export default reducer;

        - Dans redux/store/action.jsx
        const ajouterEmp = (newEmploye) => ({
            type: 'ADD_EMPLOYE',payload : newEmploye
        });
7. Q7. Ecrire le code du composant Employe.jsx et le fichier Employe.module.css (module CSS) ou
Employe.css pour afficher les données d'un employé sous la forme suivante. Les données de l'employé sont
passées à ce composant via les props

    - Dans employes/Employe.jsx

    export default function Employe ({employe}) {
        return (
            <div className='card-body'>
                <div className='card-image'>
                    <img src={employe.image} alt={emplye.nom}>
                </div>
                <div className='card-text'>
                    <h4>{employe.nom}</h4>
                </div>
            </div>
        )
    }

8. Ecrire le code du composant ListEmploye.jsx et le fichier listEmploye.module.css (module CSS) listEmploye css pour afficher la liste des employés stocké dans le store de redux comme présenté dans la figure suivante. La clique sur l'image d'un employé dans la liste permet d'ouvrir la page de détails de l'employé en passant son nom comme paramètre (4 points) :

    - Dans emplyes/ListEmployes.jsx

        export default function ListEmployes() {
            const employes = useSelector(state=> state.employes)
            return (
                <div className='contanier'>
                    {employes.map((emp,index)=>
                        `<Link to={`/${emp.nom}`}>`
                        <Employe employe={emp}>
                        </Link>
                    )}
                </div>
            )
        }