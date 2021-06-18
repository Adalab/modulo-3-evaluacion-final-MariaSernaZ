import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  //console.log(props.character.id);
  return (
    <article className="backgroundCardList">
      <Link to={`./characterDetail/${props.character.id}`}>
        <img
          className="imgCharacter"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
      </Link>
      <div className="cardText">
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
        <p>{props.character.episode.length}</p>
      </div>
    </article>
  );
};

export default CharacterCard;
