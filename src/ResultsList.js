import React from 'react';
import Result from './Result';

export default function ResultList(props) {
  const results = props.results.map(item => {
    return <Result 
              key={item.url}
              name={item.name}
              result={{
                gender: item.gender,
                birth_year: item.birth_year,
                height: item.height,
                mass: item.mass,
                eye_color: item.eye_color,
                hair_color: item.hair_color,
                homeworld: item.homeworld,
                species: item.species,
              }}
            />
  })

  return(
    <div className="results-list">
      {results}
    </div>
  );
}