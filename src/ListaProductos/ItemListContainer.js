import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../apis/apiDefinition";

let basePath = `${apiBaseUrl}character`;

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { status } = useParams();

  useEffect(() => {
    let apiPath;
    if (status) {
      apiPath = basePath + `/?status=${status}`;
    } else {
      apiPath = basePath;
    }
    fetch(`${apiPath}`)
      .then((response) => response.json())
      .then((data) => {
        let charactersInfo = data.results;
        if (charactersInfo.length > 0) {
          charactersInfo = charactersInfo.map((obj) => ({
            name: obj.name,
            image: obj.image,
            id: obj.id,
            price: Number(obj.id) + 10,
          }));
        }
        setItems(charactersInfo);
      })
      .catch((error) => {
        setItems([]);
      });
  }, [status]);

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
