3. Ecrire le code pour configurer un store avec ReduxToolkit dans le fichier < redux/store.js

 - Dans redux/store.js
    import {configureStore} from '/@reduxjs/toolit'
    import feedbackReducer from '/feedbackSlice'

    export const store = configureStore({
        reducer : {
            feedback : feedbackReducer,
        },
    });
4. Donner le code à ajouter dans le fichier < index.js » pour intégrer le store dans l'application.
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import Provider from 'react-redux'
    import store from './redux/soore';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
    );

5. Créer un slice Redux dans le fichier redux/feedbackSlice.js pour gérer les opérations CRUD sur les
feedbacks. Incluez un exemple de feedback dans initialState, ainsi que des actions pour ajouter, mettre à jour, et supprimer le feedback d'un étudiant. N'oublier pas d'exporter les actions et le reducer.

- Dans redux/feedbackSlice.js
    import {createSlice} from '@reduxjs/toolkit'

    cont initialState = {
        items : [
            { 
                nom: 'Sophie Martin', 
                note: 5, 
                commentaire: 'Le cours est très bien structuré et clair.', 
                date_creation: new Date().toISOString()
            }
        ]
    }

    const feedbackSlice = createSlice({
        name: 'feedback',
        initialState,
        reducers: {
            addFeedback : (state,action) => {
                const newFeedback = {
                    nom: action.payload.nom,
                    note : Number (action.payload.note),
                    commentaire: action.payload.commentaire,
                    date_creation : new Date()
                };
                state.items.push(newFeedback);
            },
            updateFeedback: (state, action) => {
                const {nom,note,commentaire} = action.payload;
                const existingFeddback = state.items.find((item)=> item.id === parseInt(id));
            }
            deleteFeedback : (state,action) => {
                state.items = state.items.fileter((item)=> item.id !== action.paylaod)
            }
        }
    })
    export const {addFeedback,updateFeedback, deleteFeedback}= feedbackSlice.actions;
    export default feedbackSlice.reducer;

6. Créer un composant AddFeedbackForm qui permet à un étudiant d'ajouter un feedback.
- Dans components/AddFeedbackForm.jsx

    import {useState} from 'react';
    import {useDispatch} from 'react-redux';
    import {AddFeddback} from './redux/feedbackSlice'

export default function AddFeedbackForm () {
    const [nom,setNom] = useState('');
    const [note,setNote] = useState(5);
    const [commentaire,setCommenatire] = useState('')
    const dispatch = useDispatch();


    function handleSubmit (e) {
        e.preventDefault();
        const newFeedback = {
            nom : nom,
            note : Number(note),
            commentaire : commentaire,
        };
        dispatch(newFeedback);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nom</label>
                <input type:'text' value={nom} onChange={(e)=>setNom(e.target.value)}>
                <label>Note</label>
                <select onChange={(e)=>setNote(e.target.value)}>
                    <option value ='1'>1 - À améliorer</option>
                    <option value ='2'>2 - Passable</option>
                    <option value ='3'>3 - Bon</option>
                    <option value ='4'>4 - Très bon</option>
                    <option value ='5'>5 - Excellent</option>
                </select>
                <textarea placeholder='Vos commentaires' value={commentaire} onChanger={(e)=>setCommentaire(e.target.value)}></textearea>
            </form>
        </div>
    )
}

7. Créer un composant FeedbackList qui affiche la liste des feedbacks à partir du store.
Travall ★ Office de la For
- Avec un champ de recherche qui permet de filtrer les feedbacks par nom étudiant.
- Chaque feedback doit afficher les informations (nom (Anonyme si vide), note (avec des étoiles),
commentaire, et date création).
- Utiliser un background rouge pour les feedbacks avec une note inférieure à 3 et vert pour les autres.
- Utiliser les entités HTML pour les étoiles pleines et vides ★ = &starf; ✩ = &star;

- Dans componemnts/FeedbackList.jsx

import {useState} from 'react';
import {useSelector} from 'react-redux';
export default function FeedbackList () {
    const feedbacks = useSelector(state=>state.feedback,items);

    const [rechercherTerme, setRechercherTerte] = useState('');
    const renderStarts = (note) => {
        let starts = [];
        for (let i = 1; i <=5 ,i++>) {
            if (i,= note) {
                stars.push(<span key={i}>&#9733;</span>);
            } else {
                stars.push(<span key={i}>&#9734;</span>);            
            }
            return starts=l
        }
        const formatDate = (isoDate) => {
            return new Date(isoDate).toLocaleDateString('fr-FR');
        }
        const filteredFeedbacks = feedbacks.filter((fb)=> {
            const nameToCheck = fb.nom.toLowerCase();
            return nameToCheck.includes(rechercherTerme.toLowerCase())
        })
    } 
    return (
    <div style={{ marginTop: '20px' }}>
      <h2>Feedback des étudiants</h2>

      {/* Champ de recherche */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher par nom étudiant ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '250px', marginRight: '10px' }}
        />
        <button style={{ padding: '8px 15px', cursor: 'pointer' }}>Filtrer</button>
      </div>

      {/* Liste des cartes */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map((fb,index) => (
            <div
              key={index}
              style={{
                // Logique conditionnelle pour la couleur de fond
                backgroundColor: fb.rating < 3 ? '#ffcccc' : '#ccffcc',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                width: '300px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Nom (Anonyme si vide) */}
              <h4 style={{ margin: '0 0 10px 0' }}>
                {fb.studentName ? fb.studentName : 'Anonyme'}
              </h4>

              {/* Étoiles */}
              <div style={{ color: '#f39c12', fontSize: '1.2rem', marginBottom: '10px' }}>
                {renderStars(fb.rating)}
              </div>

              {/* Commentaire */}
              <p style={{ minHeight: '60px', fontSize: '0.9rem' }}>
                {fb.comment}
              </p>

              {/* Date alignée à droite */}
              <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#555', marginTop: '10px' }}>
                {formatDate(fb.createdAt)}
              </div>
            </div>
          ))
        ) : (
          <p>Aucun feedback trouvé.</p>
        )}
      </div>
    </div>
  );
} 
8. On se basant sur 'react-router-dom', créer le composant << Navigation>> qui contient des liens pour
naviguer entre les pages /feedbackList et /addFeedback.

- Dans components/Navigation.jsx

    import {Link} from 'react-router-dom';

    export default function Navigation () {
        return (
            <div>
                <nav>
                    <h1>Student Feedback Manager</h1>
                    <Link to='/feedbackList'>
                    Liste des Feedbacks
                    </Link>
                    <Link to='/addFeedback'>
                    Ajouter un Feedback
                    </Link>
                </nav>
            </div>
        )
    }

9. Donner le code du fichier principal < App.js > avec:
a. Les instructions import nécessaires.
b. Le composant Navigation est rendu sur toutes les pages.
c. Les < Routes » pour les pages /feedbackList et /addFeedback.

    import {BrowserRouter,Routes,Route} from 'react-router-dom';
    import AddFeedbackForm from './components/AddfeedbackForm';
    import FeedbackList from './components/FeedbackList'
    import Navigation from './components/Navigation'

    export default App () {
        return (
            <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path='/feedbackList' element={<FeedbackList/>} />
                <Route path='/addFeedback' element={<AddfeedbackForm/>} />
            </Routes>
            </BrowserRouter>
        )
    }