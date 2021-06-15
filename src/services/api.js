const getDataFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  ) // Cambiar url
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
        };
      });
      //console.log(characterData);
      return characterData;
    });
};

export default getDataFromApi;
