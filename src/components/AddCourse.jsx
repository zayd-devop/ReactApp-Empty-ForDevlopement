import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCourse({ onAdd }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [formateur, setFormateur] = useState('');
  const navigate = useNavigate();
  
  // Utilisation de useRef pour le focus
  const inputRef = useRef(null);

  useEffect(() => {
    // Mettre le focus sur le champ titre au chargement du composant
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!titre || !description || !formateur) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const newCourse = { titre, description, formateur };
    
    // Communication vers le parent (App)
    onAdd(newCourse);
    
    // Redirection vers la liste
    navigate('/courses');
  };

  return (
    <div className="form-container">
      <h2>Ajouter un nouveau cours</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titre :</label>
          <input 
            type="text" 
            ref={inputRef} // Liaison du ref
            value={titre} 
            onChange={(e) => setTitre(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Formateur :</label>
          <input 
            type="text" 
            value={formateur} 
            onChange={(e) => setFormateur(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Description :</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn-submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddCourse;