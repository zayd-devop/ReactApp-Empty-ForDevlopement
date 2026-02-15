  import BrowserRouter from 'react-router-dom/BrowserRouter';
    import Routes from 'react-router-dom/Routes';
    import Route from 'react-router-dom/Route';
    import Navigation from './components/Navigation';
    import FeedbackList from './components/FeedbackList';
    import AddFeedbackForm from './components/AddFeedbackForm';

    export default function  App () {
        return (
            <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path='/feedbackList' element={<FeedbackList/>} />
                <Route path='/addFeedback' element={<AddFeedbackForm/>} />
            </Routes>
            </BrowserRouter>
        )
    }