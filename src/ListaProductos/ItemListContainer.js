import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../apis/apiDefinition";
import { getFirestore } from "../Firestore/FirestoreConf";
import { writeBatch, doc, setDoc } from "firebase/firestore";

let basePath = `${apiBaseUrl}character`;

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { status } = useParams();

  ///////////// Firebase store /////////////
  ///////////// Firebase store /////////////

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemCollection = db.collection("items");

  //   itemCollection.get().then((querySnapshot) => {
  //     if (querySnapshot.size === 0) {
  //       setItems([]);
  //     } else {
  //       setItems(querySnapshot.docs.map((doc) => doc.data));
  //     }
  //   });
  // }, []);

  ///////////// Firebase store /////////////
  ///////////// Firebase store /////////////

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
        //agrego items a FireStore
        setCharactersInFirestore(charactersInfo);
      })
      .catch((error) => {
        setItems([]);
      });
  }, [status]);

  const setCharactersInFirestore = async (ch) => {
    try {
      const db = getFirestore();
      let char = ch[0];
      console.log("ch0: " + JSON.stringify(ch[0]));
      db.collection("personajes")
        .doc("LA")
        .set({
          name: char.name,
          image: char.image,
          price: char.price,
          id: char.id,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      // const charCollection = await db.collection("personajes");
      // const data = await charCollection.set(ch);
    } catch (e) {
      console.error("Error en firebase: " + e);
    }
  };

  return (
    <div className="titleSpace">
      <div className="mainSection">
        <h2>Galeria de Productos</h2>
        <p>{`Categoria ${status ? status : "Todos"}`}</p>
        {<ItemList items={items} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
