import React from 'react'

export default function CharacterCard (props) {
  return (
  <span>
    <img src={props.picurl}></img>
    <h3>{props.name}</h3>
    <p>{props.species} {props.status}</p>
    <p>{props.location.name}</p>
    <p>{props.origin.name}</p>
  </span>
    )
}
