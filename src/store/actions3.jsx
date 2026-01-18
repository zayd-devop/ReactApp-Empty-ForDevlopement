export const loginUser = (userData) => 
    ({ type: "LOGIN_SUCCESS", payload: userData });
export const logoutUser = () => 
    ({ type: "LOGOUT" });
export const registerUser = (userData) => 
    ({ type: "REGISTER_SUCCESS", payload: userData });