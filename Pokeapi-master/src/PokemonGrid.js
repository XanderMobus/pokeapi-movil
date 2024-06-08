import React from 'react';
import Pokemon from './Pokemon';


const PokemonGrid = ({ pokemonData }) => {
  return (
    <div className="pokemon-grid">
      {pokemonData.map((pokemon, index) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} index={index} />
      ))}
    </div>
  );
};

export default PokemonGrid;