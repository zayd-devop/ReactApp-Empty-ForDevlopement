const initialState = ({
    employes: [
        {
            image: "http://www.ofppt.ma/employe1.jpg",
            nom: "Zaid",
            prenom: "Riyad",
            fonction: "Ingenieur"
        },
        {
            image: "http://www.ofppt.ma/employe1.jpg",
            nom: "Yasmine",
            prenom: "Riyad",
            fonction: "Ingenieur"
        }
    ]
})

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_EMPLOYE' :
            return {...state,employes:[...state,action.payload]}
        default : return state
    }
}
export default reducer;