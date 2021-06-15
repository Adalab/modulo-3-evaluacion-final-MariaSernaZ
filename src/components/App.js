import "../stylesheets/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hola Mundo <FontAwesomeIcon icon={faHeart} className="App-icon" />
        </p>
      </header>
    </div>
  );
}

export default App;
