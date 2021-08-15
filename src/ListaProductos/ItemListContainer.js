import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

const apiPath = "https://rickandmortyapi.com/api/character";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${apiPath}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: " + JSON.stringify(data));
        let charactersInfo = data.results;
        let addNewData = charactersInfo.map((obj) => ({
          name: obj.name,
          image: obj.image,
          id: obj.id,
          price: Number(obj.id) + 10,
        }));
        setItems(addNewData);
        console.log("data.results: " + JSON.stringify(data.results));
      });
  }, []);

  return (
    <div className="titleSpace">
      <div className="mainSection">
        <h2>Galeria de Productos</h2>
        <p>{`Categoria ${greeting}`}</p>
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
