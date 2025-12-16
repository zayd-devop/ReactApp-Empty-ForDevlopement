import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseList from './components/CourseList';
import AddCourse from './components/AddCourse';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  // Données initiales
  const [courses, setCourses] = useState([
    { id: 1, titre: "React JS", description: "Introduction à React", formateur: "Bouchra" },
    { id: 2, titre: "Node JS", description: "Backend Laravel", formateur: "Karim" }
  ]);

  // Fonction pour ajouter un cours
  const addCourse = (newCourse) => {
    // Génération d'un ID simple
    const courseWithId = { ...newCourse, id: Date.now() };
    setCourses([...courses, courseWithId]);
  };

  // Fonction pour supprimer un cours avec confirmation
  const deleteCourse = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce cours ?")) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList courses={courses} onDelete={deleteCourse} />} />
          <Route path="/add-course" element={<AddCourse onAdd={addCourse} />} />
          <Route path="/courses/:id" element={<CourseDetails courses={courses} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;