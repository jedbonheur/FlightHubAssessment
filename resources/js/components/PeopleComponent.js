import React from 'react'

function PeopleComponent({ name, height, mass, hair_color, skin_color, birth_year, gender }) {
 return (
  <>
   <div class="card m-3" style={{ width: "20em" }}>
    <div class="card-header text-light bg-primary">
     <strong className="pr-2">Name :</strong> {name}
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item"><strong className="pr-2">Height :</strong>{height}</li>
     <li class="list-group-item"><strong className="pr-2">Mass :</strong>{mass}</li>
     <li class="list-group-item"><strong className="pr-2">Hair color :</strong>{hair_color}</li>
     <li class="list-group-item"><strong className="pr-2">Eye color :</strong>{skin_color}</li>
     <li class="list-group-item"><strong className="pr-2">Birth year :</strong>{birth_year}</li>
     <li class="list-group-item"><strong className="pr-2">Gender :</strong>{gender}</li>
    </ul>
    <div class="card-body">
     <button type="button" class="btn btn-primary">View More</button>
    </div>
   </div>
  </>
 )
}
export default PeopleComponent;