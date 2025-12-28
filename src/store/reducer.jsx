const initialState = {
   articles: [
{ id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
{ id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
],
}
const reducer = (state = initialState, action) => { 
   switch(action.type) {
      case 'ADD_ARTICLE':
         //incrementer ID
      const NextId=state.articles[state.articles.length-1].id+1;
      const post = {id:NextId,title:action.payload.title,body:action.payload.body};
      return {...state,articles:[...state.articles,post]};
      // case 'DELETE_USER':
      //    return {...state,articles:state.articles.filter(article => article.id !== action.payload )}
      //    // on garde id des articles qui sont differents de celui recu
      default:
      return state;
   }

}
export default reducer
