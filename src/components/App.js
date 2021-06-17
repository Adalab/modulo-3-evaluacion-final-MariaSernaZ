import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";
import NotFoundCharacter from "./NotFoundCharacter";
import logoHeader from "../images/Rick&MortyLogo.png";
import "../stylesheets/App.scss";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState("");

  //Traemos los datos filtrados del API por imagen, nombre y especie. Actualizamos estado con setCharacters
  useEffect(() => {
    getDataFromApi().then((charactersApiData) => {
      //console.log(charactersApiData);
      setCharacters(charactersApiData);
    });
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("filterName", filterName);
  }, [filterName]);

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
  const renderCharacterDetail = (routeProps) => {
    //console.log("Router props", props); //para comparar el id seleccionado del API, necesitamos compararlos con el id del router
    //Filtramos y seleccionamos un único objeto con find (será el personaje encontrado)
    const routeCharacterId = routeProps.match.params.id;

    const characterDetail = characters.find((character) => {
      return character.id === parseInt(routeCharacterId);
    });
    //console.log(characterDetail); //Devuelve un objeto del personaje seleccionado
    if (characterDetail) {
      return <CharacterDetail character={characterDetail} />;
    } else {
      return <NotFoundCharacter />;
    }
  };

  return (
    <>
      <header className="headerLogo">
        <img
          className="imgLogo"
          src={logoHeader}
          alt="Rick and Morty logo"
          title="Rick and Morty logo"
        />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Filters filterName={filterName} handleFilter={handleFilter} />

            {filteredCharacters.length > 0 ? (
              <CharacterList characters={filteredCharacters} />
            ) : (
              <p className="notFoundText">
                No hay ningún personaje que coincida con la búsqueda
              </p>
            )}
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
