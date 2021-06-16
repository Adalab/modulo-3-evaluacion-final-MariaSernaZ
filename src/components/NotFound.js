import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <p>El personaje que buscas no existe</p>
      <Link to="/">Volver</Link>
    </main>
  );
};

export default NotFound;
