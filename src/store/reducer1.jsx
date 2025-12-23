
const initialState = {produits:[
 {
      id: 1,
      title: "Casque Audio Premium",
      price: 129.99,
      // Image réelle de casque sur fond clair
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60", 
      stock: 12
    },
    {
      id: 2,
      title: "Montre Minimaliste",
      price: 89.50,
      // Image réelle d'une montre
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      stock: 5
    },
    {
      id: 3,
      title: "Appareil Photo Vintage",
      price: 450.00,
      // Image réelle d'un appareil photo
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60",
      stock: 0 
    },
    {
      id: 4,
      title: "Baskets Sport Rouge",
      price: 75.00,
      // Image réelle de chaussures
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
      stock: 8
    }
]}
//la valeur du variable state = initialState
export default function reducer1(state=initialState,action) {
switch(action.type) {
    case 'Update_Qte' :
        return{...state,produits:state.produits.map(p=>(p.id !== action.id)?p:{...p,stock:p.stock-action.qte_cmd})}
    case 'Update_Qte' :
        return{...state,produits:state.produits.map(p=>(p.id !== action.id)?p:{...p,stock:p.stock-action.qte_cmd})}

    default : return state;
}
}