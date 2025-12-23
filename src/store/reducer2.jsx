

const initialState = {panier:[]}
//la valeur du variable state = initialState
export default function reducer2(state=initialState,action) {
switch(action.type) {
    case 'Add_Panier':
        const p=state.panier.find(p=>p.id === action.id)
        if (p)
            return {...state,panier:state.panier.map(p=>p.id !==action.id ? p:{id:p.id,qte_cmd:p.qte_cmd+action.qte_cmd})}
        else
        return {...state,panier:[...state.panier,{id:action.id,qte_cmd:action.qte_cmd}]}
    case 'Delete_Panier':
        return {...state,panier:state.panier.filter(p=>p.id !==action.id)}
    case 'Update_Panier':
        return {...state,panier:state.panier.map(p=>p.id !==action.id ? p:{id:p.id,qte_cmd:action.qte_cmd})}

default : return state; 
}
}