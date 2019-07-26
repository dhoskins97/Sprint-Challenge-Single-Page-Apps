import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {

const [episodes, setEpisodes] = useState([]);

useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/`).then( (res) => {
      setEpisodes(res.data.results);
    })
  }, [])

  return (
      <section>
          {episodes.map( episode => {
              return <EpisodeCard name={episode.name} air_date={episode.air_date} episode={episode.episode} />
          })}
      </section>
  )
}
