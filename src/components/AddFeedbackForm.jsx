import {useState} from 'react';
    import {useDispatch} from 'react-redux';
    import {AddFeddback} from './redux/feedbackSlice'

export default function AddFeedbackForm () {
    const [nom,setNom] = useState('');
    const [note,setNote] = useState(5);
    const [commentaire, setCommentaire] = useState('')
    const dispatch = useDispatch();

    function handleSubmit (e) {
        e.preventDefault();
        const newFeedback = {
            nom : nom,
            note : Number(note),
            commentaire : commentaire,
        };
        dispatch(AddFeddback(newFeedback));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nom</label>
                <input type='text' value={nom} onChange={(e)=>setNom(e.target.value)}/>
                <label>Note</label>
                <select onChange={(e)=>setNote(e.target.value)}>
                    <option value ='1'>1 - À améliorer</option>
                    <option value ='2'>2 - Passable</option>
                    <option value ='3'>3 - Bon</option>
                    <option value ='4'>4 - Très bon</option>
                    <option value ='5'>5 - Excellent</option>
                </select>
                <textarea placeholder='Vos commentaires' value={commentaire} onChanger={(e)=>setCommentaire(e.target.value)}></textarea>
            </form>
        </div>
    )
}