import React from 'react'
import { useSelector } from 'react-redux'
import Employe from './Employe'
import { Link } from 'react-router-dom'

export default function ListEmploye() {
    const employe = useSelector(state => state.employes)
  return (
    <div>
        {employe.map((emp,index)=>
        <Link key={index} to={`/${emp.nom}`}>
            <Employe employe={emp}/>
        </Link>
        )}
    </div>
  )
}
