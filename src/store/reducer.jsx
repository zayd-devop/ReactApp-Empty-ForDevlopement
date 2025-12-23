
const initialState = { articles: [
{ id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
{ id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
],
}
const reducer = (state = initialState, action) =>
{
   switch(action.type)
   {
      case "addPost":
         const id=state.articles[state.articles.length-1].id+1;
         const post={id:id,title:action.payload.title,body:action.payload.body}
         return {...state,articles:[...state.articles,post]}
       case "deletePost":
         return {...state,articles:state.articles.filter(a=>a.id!=action.payload)}
       case "updatePost":
         return {...state,articles:state.articles.map(a=>(a.id==action.post.id)?action.post:a)};

      default:
            return state;
   }
}
export default reducer;
