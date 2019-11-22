import React from 'react';
import Result from './Result';

export default function ResultList(props) {
  const peopleResults = props.peopleResults.map(item => { 
    return (
      <>
        <Result 
          key={item.url}
          name={item.name}
          result={{
            gender: item.gender,
            'birth year': item.birth_year,
            height: item.height,
            mass: item.mass,
            'eye color': item.eye_color,
            'hair color': item.hair_color,
            homeworld: item.homeworld,
            species: item.species,
          }}
        />
      </>
    )
  });

  const planetsResults = props.planetsResults.map(item => {
    return (
      <>
        <Result
          key={item.url}
          name={item.name}
          result={{
            climate: item.climate,
            terrain: item.terrain,
            diameter: item.diameter,
            gravity: item.gravity,
            'orbital period': item.orbital_period,
            'rotation period': item.rotation_period
          }}
        />
      </>
    )
  });

  const starshipsResults = props.starshipsResults.map(item => {
    return (
      <>
        <Result
          key={item.url}
          name={item.name}
          result={{
            manufacturer: item.manufacturer,
            'starship class': item.starship_class,
            model: item.model,
            cost: item.cost_in_credits,
            'hyperdrive rating': item.hyperdrive_rating,
            length: item.length,
          }}
        />
      </>
    )
  });

  const speciesResults = props.speciesResults.map (item => {
    return (
      <>
        <Result 
          key={item.url}
          name={item.name}
          result={{
            classification: item.classification,
            designation: item.designation,
            language: item.language,
            'average height': item.average_height,
            'eye colors': item.eye_colors,
            'hair colors': item.hair_colors,
            'skin colors': item.skin_colors
          }}
        />
      </>
    );
  });

  const vehiclesResults = props.vehiclesResults.map (item => {
    return (
      <>
        <Result 
          key={item.url}
          name={item.name}
          result={{
            manufacturer: item.manufacturer,
            model: item.model,
            'vehicle class': item.vehicle_class,
            cost: item.cost_in_credits,
            length: item.length,
          }}
        />
      </>
    );
  });


  return(
    <div className="results-list">
      {peopleResults}
      {speciesResults}
      {planetsResults}
      {starshipsResults}
      {vehiclesResults}
    </div>
  );
}