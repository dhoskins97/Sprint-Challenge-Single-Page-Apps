import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {

const [locations, setLocations] = useState([]);

useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`).then( (res) => {
      setLocations(res.data.results);
    })
  }, [])

  return (
      <section>
          {locations.map( location => {
              return <LocationCard name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length} />
          })}
      </section>
  )
}
