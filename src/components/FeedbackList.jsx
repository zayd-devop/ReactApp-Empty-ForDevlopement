import {useState} from 'react';
import {useSelector} from 'react-redux';
export default function FeedbackList () {
    const feedbacks = useSelector(state=>state.feedback.items);

    const [rechercherTerme, setRechercherTerte] = useState('');
    const renderStarts = (note) => {
        let starts = [];
        for (let i = 1; i <=5 ; i++) {
            if (i <= note) {
                starts.push(<span key={i}>&#9733;</span>);
            } else {
                starts.push(<span key={i}>&#9734;</span>);            
            }
            return starts;
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