import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [user, setUser] =useState([]);

   useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching Pokémon:', error));
  }, []);
  return (
   <div>
    <h1>Pokemon</h1>
    <p>{user.name}</p>
    <p>{user.id}</p>
    {user.sprites?.front_default && (
        <img src={user.sprites.front_default} alt="pokemon" />
      )}

   </div>
  )
}

export default App
