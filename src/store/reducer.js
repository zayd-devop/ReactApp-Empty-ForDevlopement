// //Etape 2 : Creation reducer.js


const initialState = { users: [],activeUserPosts: []
}
const reducer = (state=initialState,action) => {
    switch(action.type) {
        case 'LOAD_USERS' :
            return { ...state, users: action.payload };       
        case 'ADD_USER' :
            return {...state,users:[...state.users,action.payload]};
        case 'DELETE_USER':
            return {...state, users:[...state.users.filter((u)=> u.id !== parseInt(action.payload))]}
        case 'UPDATE_USER':
            return {
                ...state,users: state.users.map((user) => user.id === parseInt(action.payload.id) ? action.payload : user )
            }
        case 'LOAD_USER_POSTS':
            return { ...state, activeUserPosts: action.payload };
    default :return state;
    
    }

}
export default reducer;



