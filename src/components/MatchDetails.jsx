import React from 'react'
import { useParams } from 'react-router-dom';


export default function MatchDetails(props) {
    const {id} = useParams();
    const match = props.matches.find(m=>m.id === parseInt(id));
  return (
    <div>
        <p>{match.name}</p>
        <p>{match.matchDay}</p>
        <p>{match.location}</p>
    </div>
  )
}
