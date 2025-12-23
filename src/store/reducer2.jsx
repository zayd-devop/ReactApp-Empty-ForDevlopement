

const initialState = {panier:[]}
//la valeur du variable state = initialState
export default function reducer2(state=initialState,action) {
switch(action.type) {
    case 'Add_Panier':
        return {...state,panier:[...state.panier,{id:action.id,qte_cmd:action.qte_cmd}]}
    case 'Delete_Panier':
        return {...state,panier:state.panier.filter(p=>p.id !==action.id)}
default : return state; 
}
}