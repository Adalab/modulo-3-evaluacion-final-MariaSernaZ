import { Link } from "react-router-dom";
import iconSpecies from "../services/iconSpecies";

const CharacterDetail = (props) => {
  //console.log(props.character.name);
  const species = props.character.species;

  return (
    <section>
      <Link to="/">
        <i className="fas fa-angle-left"></i> Volver
      </Link>
      <article>
        <img src={props.character.image} alt={props.character.name} />
        <h3>{props.character.name}</h3>
        <div>
          <p>Especie: {props.character.species}</p>
          {iconSpecies(species)}
        </div>
        <p>Planeta de origen: {props.character.planet}</p>
        <p>Episodios: {props.character.episode.length}</p>
        <p>Status: {props.character.status}</p>
      </article>
    </section>
  );
};

export default CharacterDetail;
