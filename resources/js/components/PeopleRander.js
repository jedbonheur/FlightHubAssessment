import axios from 'axios';
import Loading from './Loading'
import React, { useEffect, useState } from 'react';

function PeopleRander() {

  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPoeple, setfilteredPoeple] = useState([]);

  // Fetch Using useEffect

  useEffect(() => {
    setLoading(true)
    axios.get('/api/people/')
      .then(response => {
        setPeopleData(response.data.results);
        setLoading(false)
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }, []);

  // SetSearch Wrapped in useEffect with search, peopleData depencencies
  useEffect(() => {
    setfilteredPoeple(
      peopleData.filter(people => {
        return people.name.toLowerCase().includes(search.toLowerCase())
      })
    );
  }, [search, peopleData])


  // rander loading conditionally 
  if (loading) {
    return <Loading />
  }
  // rander in JSX 
  return (
    <>
      {/* search form */}
      <div class="input-group p-3">
        <input
          type="text"
          class="form-control"
          onChange={e => setSearch(e.target.value)}
          placeholder="Search a Person.."
        />
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>

      {/* Loading  */}

      {loading}

      {/* map through data */}
      {
        filteredPoeple.map(person => {
          return (
            <>
              <div key={person.id} class="card m-3" style={{ width: "20em" }}>
                <div class="card-header text-light bg-primary">
                  <strong>Name</strong> {person.name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong className="pr-3">Height:</strong>{person.name}</li>
                  <li class="list-group-item"><strong className="pr-3">Mass:</strong>{person.mass}</li>
                  <li class="list-group-item"><strong className="pr-3">Hair color:</strong>{person.hair_color}</li>
                  <li class="list-group-item"><strong className="pr-3">Eye color:</strong>{person.skin_color}</li>
                  <li class="list-group-item"><strong className="pr-3">Birth year:</strong>{person.birth_year}</li>
                  <li class="list-group-item"><strong className="pr-3">Gender:</strong>{person.gender}</li>
                </ul>
              </div>
            </>
          )
        })
      }
    </>
  );
}

export default PeopleRander;
