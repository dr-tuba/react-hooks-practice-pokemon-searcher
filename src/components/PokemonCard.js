import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from 'react';

function PokemonCard({ name, hp, sprites }) {
  const [cardFacing, setCardFacing] = useState(true)

  const handlePictureClick = (e) => {
    setCardFacing(!cardFacing)
  }
  
  return (
    <Card>
      <div onClick={handlePictureClick}>
        <div className="image">
          <img src={cardFacing ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
