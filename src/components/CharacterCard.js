import React from "react";

const CharacterCard = (props) => {
  return (
    <article>
      <img
        className="imgCharacter"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h3>{props.character.name}</h3>
      <p>{props.character.species}</p>
    </article>
  );
};

export default CharacterCard;
