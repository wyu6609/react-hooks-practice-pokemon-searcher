import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  // pokemons state
  const [pokemons, setPokemons] = useState([]);
  //set searchInput state
  const [searchInput, setSearchInput] = useState("");

  let displayedPokemons = pokemons.filter((el) => {
    if (el.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return el;
    } else if (searchInput == "") {
      return el;
    }
  });

  const onAddItem = (newObj) => {
    setPokemons([...pokemons, newObj]);
  };
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddItem={onAddItem} />
      <br />
      <Search setSearchInput={setSearchInput} />
      <br />
      <PokemonCollection
        displayedPokemons={displayedPokemons}
        setPokemons={setPokemons}
      />
    </Container>
  );
}

export default PokemonPage;
