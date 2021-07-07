import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState } from 'react';

function PokemonPage({ pokemon, setPokemon }) {
  const [searchText, setSearchText] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''    
  })
  
  const handleTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    setPokemon([...pokemon, newPokemon])
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        handleSubmit = {handleSubmit}
        handleChange={handleChange}
      />
      <br />
      <Search 
        pokemon={pokemon}
        handleTextChange = {handleTextChange}
      />
      <br />
      <PokemonCollection 
        pokemon={pokemon}
        searchText={searchText}
      />
    </Container>
  );
}

export default PokemonPage;
