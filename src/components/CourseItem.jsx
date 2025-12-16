import { Link } from 'react-router-dom';

function CourseItem({ course, onDelete }) {
  return (
    <div className="course-card">
      <h3>{course.titre}</h3>
      <p><strong>Formateur:</strong> {course.formateur}</p>
      <div className="actions">
        <Link to={`/courses/${course.id}`} className="btn-details">
          Voir détails
        </Link>
        <button onClick={() => onDelete(course.id)} className="btn-delete">
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default CourseItem;