const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      /*Seleccionamos los datos que necesitamos con map*/
      const characterData = data.results.map((character) => {
        //console.log(character);
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          id: character.id,
          planet: character.origin.name,
          episode: character.episode,
          status: character.status,
        };
      });
      //console.log(characterData);
      return characterData;
    });
};

export default getDataFromApi;
