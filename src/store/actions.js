//Etape 1 : Creation des actions.js 
//3 actions : ajouter/modifier/supprimer
// export const addPostAction =(user)=> {
//     return {type:'Add_post',payload:user}
// }
// export const updateUserAction =(NewUser)=> {
//     return {type:'Update_user',payload:NewUser}
// }
// export const deleteUserAction =(id)=> {
//     return {type:'Delete_user',payload :id}
// }
export const addPostAction =(article)=> {
    return {type:'Add_post',payload:article}
}
export const updatePostAction =(NewArticles)=> {
    return {type:'Update_post',payload:NewArticles}
}
export const deletePostAction =(id)=> {
    return {type:'Delete_post',payload :id}
}