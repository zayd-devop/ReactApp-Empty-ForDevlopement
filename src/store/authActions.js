export const loginSuccessAction = (user) => {
    return {type : 'login_success',payload:user}
}
export const loginFailedAction = () => {
    return {type:'login_failed'}
}
export const register = (newUser) => {
    return {type:'register',payload:newUser}
}
export const logoutAction = () => {
    return {type:'logout'}
}