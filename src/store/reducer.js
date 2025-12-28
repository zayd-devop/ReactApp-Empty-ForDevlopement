//Etape 2 : Creation reducer.js

const initialState = {users:[
    {id:1, name:'Zaid', email:'zaid@email.com'},
    {id:2, name: 'Oussama', email: 'oussama@email.com'}
]};

const reducer =(state=initialState,action) => {

    switch(action.type) {
        case 'Add_user' :
            return {...state, users:[...state.users, action.payload]}
        case 'Update_user':
            //recuperation l'element
            const user = state.users.find((u)=> u.id === parseInt(action.payload.id))
            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }

        case 'Delete_user' :
            return {...state, users:[...state.users.filter((u)=> u.id !== parseInt(action.payload))]}
    default :return state;
        }
}
export default reducer;