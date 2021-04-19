import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

function PlanetsRander() {

  const [poepleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState([]);

  // Fetch Using useEffect

  useEffect(() => {
    setLoading(true)
    axios.get('/api/planets/')
      .then(response => {
        setPeopleData(response.data.results);
        setLoading(false)
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }, []);

  // rander loading conditionally 

  if (loading) {
    return <Loading />
  }

  // rander in JSX 
  return (
    <>
      {/* Loading  */}

      {loading}

      {/* map through data */}
      {
        poepleData.map(planet => {
          return (
            <>
              <div key={planet.id} class="card m-3" style={{ width: "20em" }}>
                <div class="card-header text-light bg-primary">
                  <strong className="pr-2">Name :</strong> {planet.name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong className="pr-2">Rotation period :</strong>{planet.rotation_period}</li>
                  <li class="list-group-item"><strong className="pr-2">Orbital period :</strong>{planet.orbital_period}</li>
                  <li class="list-group-item"><strong className="pr-2">Diameter :</strong>{planet.diameter}</li>
                  <li class="list-group-item"><strong className="pr-2">Climate :</strong>{planet.climate}</li>
                  <li class="list-group-item"><strong className="pr-2">Gravity :</strong>{planet.gravity}</li>
                  <li class="list-group-item"><strong className="pr-2">Surface water :</strong>{planet.surface_water}</li>
                  <li class="list-group-item"><strong className="pr-2">Population :</strong>{planet.population}</li>
                </ul>
              </div>
            </>
          )
        })
      }
    </>
  );
}

export default PlanetsRander;
