import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonGrid from './PokemonGrid';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
      );
      setPokemonData(response.data.results);
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchChange(e);
    }
  };

  const filteredPokemon = searchText === '' ? pokemonData : pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase() === searchText.toLowerCase()
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search pokémon"
        value={searchText}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <PokemonGrid pokemonData={filteredPokemon} />
    </div>
  );
};

export default PokemonList;