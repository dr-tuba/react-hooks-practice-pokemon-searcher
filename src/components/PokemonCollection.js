import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, searchText }) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map(eachPokemon => { 
        if (eachPokemon.name.toLowerCase().startsWith(searchText.toLowerCase()))return (
        <PokemonCard 
          key={eachPokemon.id}
          name={eachPokemon.name}
          hp={eachPokemon.hp}
          sprites={eachPokemon.sprites}
        />
      )})}
    </Card.Group>
  );
}

export default PokemonCollection;
