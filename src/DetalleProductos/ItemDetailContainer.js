import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Modal, Button } from "react-bootstrap";

const apiPath = "https://rickandmortyapi.com/api/character/";

const ItemDetailContainer = (props) => {
  const [show, setShow] = useState(false);
  const [character, setCharacter] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getItem = () => {
    fetch(`${apiPath}${props.id}`)
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
      });
  };

  const ShowItems = () => {
    if ({ show }) {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{character.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ItemDetail item={character} />
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

  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {
    ShowItems();
  }, [show]);

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
