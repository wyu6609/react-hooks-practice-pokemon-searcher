import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  //front state
  const [front, setFront] = useState(true);
  const clickHandler = () => {
    setFront(!front);
  };
  return (
    <Card onClick={clickHandler}>
      <div>
        <div className="image">
          <img
            alt="oh no!"
            src={front ? pokemon.sprites.front : pokemon.sprites.back}
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
