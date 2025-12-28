//Etape 1 : Creation des actions.js 
//3 actions : ajouter/modifier/supprimer
export const addUserAction =(user)=> {
    return {type:'Add_user',payload:user}
}
export const updateUserAction =(NewUser)=> {
    return {type:'Update_user',payload:NewUser}
}
export const deleteUserAction =(id)=> {
    return {type:'Delete_user',payload :id}
}