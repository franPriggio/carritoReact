import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = (props) => {
  return (
    <div className="listStyle">
      <Container>
        <Row>
          {props.items.map(({ id, image, name, price }) => {
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
