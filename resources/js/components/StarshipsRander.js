import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading'

function StarshipsRander() {

  const [poepleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState([]);

  // Fetch Using useEffect
  useEffect(() => {
    setLoading(true);
    axios.get('/api/starships/')
      .then(response => {
        setPeopleData(response.data.results);
        setLoading(false);
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
        poepleData.map(starship => {
          return (
            <>
              <div key={starship.id} class="card m-3" style={{ width: "20em" }}>
                <div class="card-header text-light bg-primary">
                  <strong>Name :</strong> {starship.name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong className="pr-3">Model:</strong>{starship.model}</li>
                  <li class="list-group-item"><strong className="pr-3">Manufacturer:</strong>{starship.manufacturer}</li>
                  <li class="list-group-item"><strong className="pr-3">Cost in credits:</strong>{starship.cost_in_credits}</li>
                  <li class="list-group-item"><strong className="pr-3">Length:</strong>{starship.length}</li>
                  <li class="list-group-item"><strong className="pr-3">Max atmosphering speed:</strong>{starship.max_atmosphering_speed}</li>
                  <li class="list-group-item"><strong className="pr-3">Crew:</strong>{starship.crew}</li>
                  <li class="list-group-item"><strong className="pr-3">Passengers:</strong>{starship.passengers}</li>
                  <li class="list-group-item"><strong className="pr-3">Cargo capacity:</strong>{starship.cargo_capacity}</li>
                </ul>
              </div>
            </>
          )
        })
      }
    </>
  );
}

export default StarshipsRander;
