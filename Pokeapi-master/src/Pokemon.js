import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getPokemonIdFromUrl = (url) => {
  const id = url.split('/')[url.split('/').length - 2];
  return parseInt(id);
};

const Pokemon = ({ pokemon, index }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [selected, setSelected] = useState(false);
  const id = getPokemonIdFromUrl(pokemon.url);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(pokemon.url);
      setPokemonData(response.data);
    };

    fetchData();
  }, [pokemon.url]);

  const handleClick = () => {
    setSelected(!selected);
  };

  if (!pokemonData) return null;

  return (
    <div className="pokemon-card" onClick={handleClick}>
      
      <img
        src={pokemonData.sprites.front_default}
        alt={`${pokemonData.name} sprite`}
      />
      <h3>
        {id}. {pokemonData.name}
      </h3>
      {selected && (
        <div style={{ textAlign: 'center', backgroundColor: 'violet' }}>
          <p>Type: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
          <p>HP: {pokemonData.stats[0].base_stat}</p>
          <p>Attack: {pokemonData.stats[1].base_stat}</p>
          <p>Defense: {pokemonData.stats[2].base_stat}</p>
          <p>Sp. Atk: {pokemonData.stats[3].base_stat}</p>
          <p>Sp. Def: {pokemonData.stats[4].base_stat}</p>
          <p>Speed: {pokemonData.stats[5].base_stat}</p>
        </div>
      )}
    </div>
  );
};

export default Pokemon;