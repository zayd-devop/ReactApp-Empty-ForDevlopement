const initialState = {
    isAuth: false,
    user: null,
    users: [], 
    error: null
};

export default function reducer3(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return { ...state,users: [...state.users, action.payload],error: null };
        case 'LOGIN_SUCCESS':
            return {...state,isAuth: true,user: action.payload,error: null };

        case 'LOGOUT':
            return { ...state, isAuth: false, user: null };
        default:
            return state;
    }
}