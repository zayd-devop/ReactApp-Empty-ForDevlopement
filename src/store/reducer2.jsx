

const initialState = {panier:[]}
//la valeur du variable state = initialState
export default function reducer2(state=initialState,action) {
switch(action.type) {
    case 'Add_Panier':
        //... parce que initialState est un object
        return {...state,panier:[...state.panier,{id:action.id,qte_cmd:action.qte_cmd}]}
default : return state; 
}
}