import React from "react";

const CharacterCard = (props) => {
  return (
    <>
      <img
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h3>{props.character.name}</h3>
      <p>{props.character.species}</p>
    </>
  );
};

export default CharacterCard;
