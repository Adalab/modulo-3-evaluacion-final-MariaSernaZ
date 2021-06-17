import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <p className="notFoundText">El personaje que buscas no existe</p>
      <Link to="/" className="linkBack">
        {" "}
        <i className="fas fa-angle-left iconBack"></i> Volver
      </Link>
    </main>
  );
};

export default NotFound;
