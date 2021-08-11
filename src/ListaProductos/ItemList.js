import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

const apiPath = "https://rickandmortyapi.com/api/character";

const ItemList = () => {
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
    <div className="listStyle">
      <Container>
        <Row>
          {items.map(({ id, image, name, price }) => {
            return (
              <Col>
                <Item
                  key={id}
                  title={name}
                  pictureUrl={image}
                  itemPrice={price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
