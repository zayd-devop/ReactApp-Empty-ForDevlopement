const initialState = {
    products: [{
            id: 1,
            name: "MacBook Pro",
            description: "Ordinateur portable puissant pour les développeurs.",
            price: 1200
        },
        {
            id: 2,
            name: "iPhone 14",
            description: "Smartphone dernière génération avec caméra 4K.",
            price: 999
        },
        {
            id: 3,
            name: "Casque Sony WH-1000XM4",
            description: "Casque à réduction de bruit active.",
            price: 350
        },
        {
            id: 4,
            name: "Clavier Mécanique RGB",
            description: "Clavier gamer avec switchs rouges silencieux.",
            price: 120
        },
        {
            id: 5,
            name: "Ecran Dell 27 pouces",
            description: "Moniteur 4K parfait pour le design et le code.",
            price: 400
        }],
        cart: []
}
const productReducer = (state=initialState,action) =>{
    switch (action.type) {
        case 'add_product':
            return{...state,products:[...state.products,action.payload]}
        case 'delete_product':
            return{...state,products:state.products.filter(p=> p.id !== parseInt(action.payload))}
        case 'add_to_cart':
            const ProductExist = state.cart.find(item => item.id === action.payload.id) 
            if (ProductExist) {
                return {...state,cart:state.cart.map(element =>
                    element.id === action.payload.id ? {...element,quantity: element.quantity + 1}: element)}
            } else {
                return { ...state,cart:[...state.cart,{ ...action.payload, quantity: 1 }]}
            }
        default :return state;
    }
}
export default productReducer;