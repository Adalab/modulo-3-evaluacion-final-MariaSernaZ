import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import logoHeader from "../images/Rick&MortyLogo.png";
import "../stylesheets/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);

  const [filterName, setFilterName] = useState("");

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
  //Con inputData recibimos los datos que hemos pasado por lifting desde FilterByName: value y key
  const handleFilter = (inputData) => {
    //console.log(inputData);
    if (inputData.key === "name") {
      setFilterName(inputData.value);
    }
  };

  //render
  const renderCharacterDetail = (props) => {
    //console.log("Router props", props); //para comparar el id seleccionado del API, necesitamos compararlos con el id del router
    //Filtramos y seleccionamos un único objeto con find
    const routerCharacterId = props.match.params.id;

    const characterDetail = characters.find((character) => {
      return character.id === parseInt(routerCharacterId);
    });
    //console.log(characterDetail); //Devuelve un objeto del personaje seleccionado
    return <CharacterDetail character={characterDetail} />;
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
        <Switch>
          <Route exact path="/">
            <Filters filterName={filterName} handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route
            path="/characterdetail/:id"
            render={renderCharacterDetail}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
