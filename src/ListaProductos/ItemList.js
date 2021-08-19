import React from "react";
import "./ItemList.css";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  return (
    <div className="listStyle">
      <Container>
        <Row>
          {props.items.map(({ id, image, name, price }) => {
            return (
              <Col>
                <Link to="/item/:id">
                  <Item
                    key={id}
                    id={id}
                    title={name}
                    pictureUrl={image}
                    itemPrice={price}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
