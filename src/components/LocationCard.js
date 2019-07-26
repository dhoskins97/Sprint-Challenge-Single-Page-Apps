import React from 'react'

export default function LocationCard (props) {

  return (
  <span>
  <h3>{props.name}</h3>
  <p>{props.type} - {props.dimension}</p>
  <div>{props.residents}</div>
  </span>
  )
}
