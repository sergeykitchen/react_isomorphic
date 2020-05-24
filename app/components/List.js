import React from 'react';
import { Link } from 'react-router-dom';

function List(props) {
  const { pokemon, location } = props;
  const { ability } = location.match.params;

  return (
    <div>
      <h3>{ability}</h3>
      <Link to="/">HOME</Link>
      <ul>
        {pokemon.map((poke) => {
          const { pokemon } = poke;
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
