// //Etape 2 : Creation reducer.js


const initialState = { articles: [
{ id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
{ id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
],
}
const reducer = (state=initialState,action) => {
    switch(action.type) {
        case 'Add_post' :
            return {...state,articles:[...state.articles,action.payload]};
        case 'Delete_post':
            return {...state, articles:[...state.articles.filter((a)=> a.id !== parseInt(action.payload))]}
        case 'Update_post':
            const article = state.articles.find((a)=> a.id === parseInt(action.payload.id))
            if (article) {
                article.title = action.payload.title
                article.body = action.payload.body
            }
    default :return state;
    
    }

}
export default reducer;



