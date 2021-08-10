import React, { useEffect, useState } from "react";

const ComponenteFuncion = () => {
  const [number, setNumber] = useState(0);
  const [characters, setCharacters] = useState([]);

  //asi se ejecuta solo la primera vez
  useEffect(() => {
    console.log("primer renderizado");
  }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        console.log("data.results: " + JSON.stringify(data.results));
      });
  }, []);

  //se ejecuta solo cuando se modifica number en state
  //useEffect(() => {
  //   console.log('Se modifico number');
  // }, [number]);

  return (
    <div>
      <button onClick={() => setNumber(number - 1)}>Resta</button>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>Suma</button>

      <div>
        <ul>
          {characters.map(({ id, image, name }) => {
            <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ComponenteFuncion;
