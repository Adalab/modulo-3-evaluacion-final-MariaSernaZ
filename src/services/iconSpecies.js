const humanIcon = <i className="fas fa-user"></i>;
const alienIcon = <i className="fab fa-reddit-alien"></i>;

const iconSpecies = (species) => {
  return species.toLowerCase() === "human" ? humanIcon : alienIcon;
};

export default iconSpecies;
