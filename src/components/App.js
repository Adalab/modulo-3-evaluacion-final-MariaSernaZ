import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import logoHeader from "../images/Rick&MortyLogo.png";
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
      <header>
        <img
          src={logoHeader}
          alt="Rick and Morty logo"
          title="Rick and Morty logo"
        />
      </header>
      <main>
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;
