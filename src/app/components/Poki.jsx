"use client";

import React, {useState} from 'react'


function Poki() {
    const [pokemonData, setPokemonData] = useState(second)

    
  // Fetching data from the Poki API
  async function fetchData(){

    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
        const data = await response.json()
        setPokemonData(data)
    }
    catch(error){
        console.error('Error:', error)
    }
  }


  return (
      <h1>Pokémon Information</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )

  )
}

export default Poki