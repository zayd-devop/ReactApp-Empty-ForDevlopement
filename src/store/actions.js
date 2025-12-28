//Etape 1 : Creation des actions.js 
//3 actions : ajouter/modifier/supprimer
import axios from "axios";

export const loadUsers =(users)=> {
    return {type:'LOAD_USERS',payload:users}
}
export const addUser = (user) => {
    return {type: 'ADD_USER',payload: user};
}
export const updateUser =(user)=> {
    return {type:'UPDATE_USER',payload:user}
}
export const deleteUser =(id)=> {
    return {type:'DELETE_USER',payload :id}
}

//pour charger l'API
export const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {                
                dispatch({
                    type: 'LOAD_USERS',
                    payload: response.data
                });
                
            })            
    };
};
export const fetchUserPosts = (userId) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => {
                dispatch({
                    type: 'LOAD_USER_POSTS',
                    payload: response.data
                });
            })
    };
};
