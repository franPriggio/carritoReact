import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../Firestore/FirestoreConf";

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
    // PARA AGREGAR A FB PERSONAJES DE A UNO
    // for (let index = 0; index < charactersInfo.length; index++) {
    //   itemCollection
    //     .doc(charactersInfo[index].name)
    //     .set(charactersInfo[index])
    //     .then(() => {
    //       console.log("Document successfully written!");
    //     })
    //     .catch((error) => {
    //       console.error("Error writing document: ", error);
    //     });
    // }

    let charactersInfo = [];
    const db = getFirestore();
    let itemCollection;

    //Filter by status
    if (status) {
      itemCollection = db
        .collection("personajes")
        .where("status", "==", status)
        .limit(12);
    } else {
      itemCollection = db.collection("personajes").limit(12);
    }

    //query firestore
    itemCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          charactersInfo.push(doc.data());
        });
        setItems(charactersInfo);
      })
      .catch((error) => {
        console.log("Error getting personajes from firestore");
      });
  }, [status]);

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
