import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
const basePath = "https://rickandmortyapi.com/api/character/";

const ItemDetailContainer = (props) => {
  const [show, setShow] = useState(false);
  const [character, setCharacter] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { charId } = useParams();

  const getItem = () => {
    let apiPath;
    if (charId) {
      apiPath = basePath + charId;
    } else {
      apiPath = `${basePath}1`;
    }
    fetchCharacter(apiPath);
  };

  const fetchCharacter = (apiPath) => {
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
    if (charId) {
      getItem();
    } else {
      if (props.id) {
        fetchCharacter(basePath + props.id);
      }
    }
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
