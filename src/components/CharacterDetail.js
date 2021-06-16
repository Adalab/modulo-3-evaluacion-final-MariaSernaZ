import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  //console.log(props.characters.name);
  return (
    <section>
      <Link to="/">Volver</Link>
      <article>
        <img src={props.character.image} alt={props.character.name} />
        <h3>{props.character.name}</h3>
        <p>Especie: {props.character.species}</p>
        <p>Planeta de origen: {props.character.planet}</p>
        <p>Episodios: {props.character.episode.length}</p>
        <p>Status: {props.character.status}</p>
      </article>
    </section>
  );
};

export default CharacterDetail;
