import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow";
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);
  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="app">
      <button onClick={handleClick} className="btn">
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals} </div>
      <div className="footer">By:
        <a href="https://github.com/MainaliMiraj" target="blank">
          Miraj Mainali
        </a>
      </div>
    </div>
  );
}
export default App;
