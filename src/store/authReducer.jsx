const initialState = {
    isAuthenticated: false,
    user: null,
    users: [{
        nom: "Doe",
        prenom: "John",
        username: "johndoe",
        email: "john.doe@example.com",
        password: "password123",
    }],
}

const authReducer = (state=initialState,action) => {
    switch(action.type) {
        case 'login_success' :
            return{...state,isAuthenticated :true,user :action.payload}
        case 'login_failed' :
            return{...state,isAuthenticated: false,user:null,error:action.payload}
        case 'register' :
            return{...state, users :[...state.users, action.payload]}
        case 'logout':
            return {...state,isAuthenticated:false,user:null}
        
            default:return state
    }
}
export default authReducer;