import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  //console.log(props.character.id);
  return (
    <Link to={`./characterDetail/${props.character.id}`}>
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
    </Link>
  );
};

export default CharacterCard;
