import CourseItem from './CourseItem';

function CourseList({ courses, onDelete }) {
  return (
    <div>
      <h2>Liste des Cours</h2>
      {courses.length === 0 ? (
        <p>Aucun cours disponible.</p>
      ) : (
        <div className="course-list">
          {courses.map(course => (
            <CourseItem 
              key={course.id} 
              course={course} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseList;