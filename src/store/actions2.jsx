
export const Add_Panier = (id,qte_cmd) =>
{
    return {type:"Add_Panier",id,qte_cmd}
}
export const Delete_Panier = (id) =>
{
    return {type:"Delete_Panier",id}
}