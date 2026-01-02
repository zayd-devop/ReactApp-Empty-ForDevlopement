const initialState = {
    theme:[{
        nom :'cake',
        description :'les cakes et les brownies'
    },
    {
        nom:'pate',
        description : 'les pates, les lasagnes et les gratins'
    }],
    recettes :[]
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case 'add_recette' :
            //verification de l'existance du recettes
            const isExist = state.recettes.find(r=>r.code === action.payload.code);
            if (isExist) {
                return {...state,recettes:state.recettes.map(r=>r.code === action.payload.code ? action.payload : r)}
            } else {
                return {...state,recettes:[...state.recettes,action.payload]}
            }
        case 'delete_recettes' :
            return {...state,recettes:[...state.recettes.filter(r=> r.code !== action.payload)]}
        default : return state;
    }
}
export default reducer;
