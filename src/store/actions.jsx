export function addPost(post)
{
 return {type:"addPost",payload:post}
}

export function deletePost(id)
{
 return {type:"deletePost",payload:id}
}
export function updatePost(post)
{
 return {type:"updatePost",post}
}
