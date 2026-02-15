import {createSlice} from '@reduxjs/toolkit'

    const initialState = {
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
            },
            deleteFeedback : (state,action) => {
                state.items = state.items.fileter((item)=> item.id !== action.paylaod)
            }
        }
    })
    export const {addFeedback,updateFeedback, deleteFeedback}= feedbackSlice.actions;
    export default feedbackSlice.reducer;