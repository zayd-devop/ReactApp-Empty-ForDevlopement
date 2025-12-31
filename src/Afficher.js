import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import { fetchProduct } from "./slice";
export default function Afficher(){
const data=useSelector(state=>state.produit)
 
const dispatch=useDispatch() 
useEffect(()=>{
dispatch(fetchProduct())
},[])
    return(
        <div>
{
    data.msg =='loading' ? <p>Loading...</p> :
    data.msg=='succes' ? 
    data.data.map((ele,i)=>{
        return(
            <div key={i}>
            <p>{ele.id}</p>
            <p>{ele.title}</p>
            </div>
        )
    }):
    <p>Echec d'acces</p>
}
        </div>
    )
}