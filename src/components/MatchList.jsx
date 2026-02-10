import React from 'react'
import { Link } from 'react-router-dom'
export default function MatchList(props) {
  return (
    <div>
        {
            props.matches.map((match)=>{
                return (
                    <div key={match.id}>
                        <p>{match.name}</p>
                        <p>{match.matchDay}</p>
                        <p>{match.location}</p>
                        <Link to={`/details/${match.id}`}>
                        Voir Details
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}
