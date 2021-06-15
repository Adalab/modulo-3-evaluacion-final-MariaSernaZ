import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import logoHeader from "../images/Rick&MortyLogo.png";
import "../stylesheets/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);

  const [filterName, setFilterName] = useState([]);

  //Traemos los datos filtrados del API por imagen, nombre y especie. Actualizamos estado con setCharacters
  useEffect(() => {
    getDataFromApi().then((charactersApiData) => {
      //console.log(charactersApiData);
      setCharacters(charactersApiData);
    });
  }, []);

  //Filtro por nombre
  const filteredCharacters = characters.filter((character) => {
    //console.log(character.name);
    return character.name.toUpperCase().includes(filterName.toUpperCase());
  });

  //event
  const handleFilter = (inputData) => {
    //console.log(inputData);
    if (inputData.key === "name") {
      setFilterName(inputData.value);
    }
  };

  return (
    <>
      <header>
        <img
          className="headerLogo"
          src={logoHeader}
          alt="Rick and Morty logo"
          title="Rick and Morty logo"
        />
      </header>
      <main>
        <Filters filterName={filterName} handleFilter={handleFilter} />
        <CharacterList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
