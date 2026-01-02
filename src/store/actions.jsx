
export const CreerRecetteAction = (recette) => {
    return{type:'add_recette',payload:recette}
}
export const DeleteRecetteAction = (code) => {
    return {type:'delete_recette',payload:code}
}