import { useParams, Link } from 'react-router-dom';

function CourseDetails({ courses }) {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  
  // Conversion de l'ID en nombre pour la comparaison
  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return <h2>Cours non trouvé !</h2>;
  }

  return (
    <div className="details-container">
      <h2>Détails du cours</h2>
      <div className="details-card">
        <h3>{course.titre}</h3>
        <p><strong>ID :</strong> {course.id}</p>
        <p><strong>Formateur :</strong> {course.formateur}</p>
        <p><strong>Description :</strong></p>
        <p>{course.description}</p>
        <br />
        <Link to="/courses" className="btn-back">Retour à la liste</Link>
      </div>
    </div>
  );
}

export default CourseDetails;