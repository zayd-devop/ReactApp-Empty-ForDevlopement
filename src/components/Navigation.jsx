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