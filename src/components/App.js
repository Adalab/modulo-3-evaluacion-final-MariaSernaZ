import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import "../stylesheets/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((charactersApiData) => {
      //console.log(charactersApiData);
      setCharacters(charactersApiData);
    });
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      <CharacterList characters={characters} />
    </>
  );
}

export default App;
