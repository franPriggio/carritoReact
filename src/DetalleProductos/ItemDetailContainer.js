import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../Firestore/FirestoreConf";

const basePath = "https://rickandmortyapi.com/api/character/";

const ItemDetailContainer = (props) => {
  const [show, setShow] = useState(false);
  const [character, setCharacter] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getItem();
  };
  const { charId } = useParams();

  const getItem = () => {
    let result = "";
    const db = getFirestore();
    let itemCollection;

    if (charId) {
      itemCollection = db
        .collection("personajes")
        .where("id", "==", parseInt(charId));
    } else {
      itemCollection = db
        .collection("personajes")
        .where("id", "==", parseInt(props.id));
    }

    //query firestore and set character
    itemCollection
      .get()
      .then((doc) => {
        setCharacter(doc.data());
        result = "ok";
        setShow(true);
      })
      .catch((error) => {
        result = "Error getting personajes from firestore";
        // if getting character from firebase fails
        // then get it from rick and morty API
        fetchCharacter(basePath + props.id);
      })
      .finally(() => {
        console.log("result: " + result);
      });
  };

  const fetchCharacter = (apiPath) => {
    if (charId) {
      apiPath = basePath + charId;
    } else {
      apiPath = `${basePath}${props.id}`;
    }
    console.log();
    fetch(`${apiPath}`)
      .then((response) => response.json())
      .then((data) => {
        let singleCharacterInfo = data;
        let addNewData = {
          name: singleCharacterInfo.name,
          image: singleCharacterInfo.image,
          id: singleCharacterInfo.id,
          price: Number(singleCharacterInfo.id) + 10,
        };
        setCharacter(addNewData);
      })
      .catch(() => {
        setCharacter({
          name: "Rick",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          id: "1",
          price: Number("1") + 10,
        });
      })
      .finally(() => {
        setShow(true);
      });
  };

  useEffect(() => {
    // getItem();
  }, []);

  useEffect(() => {
    ShowItems();
  }, [show]);

  const ShowItems = () => {
    if ({ show }) {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{character.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ItemDetail item={character} closeModal={handleClose} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };

  return (
    <div>
      <Button variant="link" onClick={handleShow}>
        Detalle
      </Button>
      <ShowItems />
    </div>
  );
};

export default ItemDetailContainer;
