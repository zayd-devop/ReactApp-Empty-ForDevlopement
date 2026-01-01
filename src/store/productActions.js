
export const addProductAction =(product) =>{
    return{type:'add_product',payload:product}
}
export const addToCartAction = (product) =>{
    return{type:'add_to_cart', payload:product}
}
export const deleteProductAction =(id) =>{
    return{type:'delete_product',payload:id}
}
