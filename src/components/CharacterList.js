import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <li className="list" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul className="characterCard">{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
