import { Link } from "react-router-dom";
import iconSpecies from "../services/iconSpecies";

const CharacterDetail = (props) => {
  //console.log(props.character.name);
  const species = props.character.species;

  return (
    <section className="characterDetailWrap">
      <Link to="/" className="linkBack">
        <i className="fas fa-angle-left iconBack"></i> Volver
      </Link>
      <article className="characterDetail">
        <img
          className="imgCharacter"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="characterData">
          <h4>{props.character.name}</h4>
          <div>
            <p>Especie: {props.character.species}</p>
            {iconSpecies(species)}
          </div>
          <p>Planeta de origen: {props.character.planet}</p>
          <p>Episodios: {props.character.episode.length}</p>
          <p>Status: {props.character.status}</p>
        </div>
      </article>
    </section>
  );
};

export default CharacterDetail;
