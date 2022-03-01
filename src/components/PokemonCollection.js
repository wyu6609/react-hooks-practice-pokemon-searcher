import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

function PokemonCollection({ displayedPokemons, setPokemons }) {
  //frontback state

  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:3001/pokemon")
      .then((resp) => resp.json())
      .then((data) => setPokemons(data));
  };
  return (
    <Card.Group itemsPerRow={6}>
      {displayedPokemons.map((pokemon) => {
        return <PokemonCard key={uuid()} pokemon={pokemon} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
