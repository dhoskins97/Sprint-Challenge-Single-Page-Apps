import React from 'react'

export default function EpisodeCard (props) {
  return (
  <span>
    <h2>{props.name}</h2>
    <p>Air Date: {props.air_date} Episode#: {props.episode}</p>
  </span>
    )
}
