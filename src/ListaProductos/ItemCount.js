import React, { useState } from "react";
import "./ItemCount.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";
import { useAdd } from "../components/Carrito/CartContext";

const ItemCount = ({ initial, maxStock, setItemCounter, setShowCount }) => {
  const [contador, setContador] = useState(initial);
  const [stock, setStock] = useState(maxStock);

  //sumo 1 del stock.
  const addCounter = () => {
    if (+contador < +stock) {
      const newCounter = contador + 1;
      setContador(newCounter);
    }
  };

  //resto 1 del stock
  const decreaseCounter = () => {
    if (+contador > 0 && +stock > 0) {
      const newCounter = contador - 1;
      setContador(newCounter);
    }
  };

  //actualizo contador segun el input de usuario
  const updateCounter = (event) => {
    event.preventDefault();
    const newCounter = +event.target.value;
    setContador(newCounter);
  };

  //resto del stock total al agregar al carrito
  const updStock = () => {
    console.log("ejecuta upd stock");
    // const newStock = stock - contador;
    // setStock(newStock);s
    setItemCounter(contador);
    setShowCount(false);
  };

  return (
    <Container>
      <Row xs="auto" className="itemClass p-4">
        <Col xs={12} className="pb-3 back tituloItem"></Col>
        <Col xs={12} className="countersClass back ">
          <Dash onClick={decreaseCounter} className="itemCounter" />
          <input
            className="itemInput counterBack"
            type="Number"
            value={contador}
            onChange={updateCounter}
          ></input>
          {/* <Button variant="outline-info" > */}
          <Plus onClick={addCounter} className="itemCounter" />
          {/* </Button> */}
        </Col>
        <Col xs={12} className="pb-3 back bottomCounter"></Col>
      </Row>
      <Row className="countersClass">
        <Col xs={12} className="centerButton">
          <Button
            variant="outline-primary"
            onClick={updStock}
            // podria llamar funcion local que actualice el stock
            // y haga demas calculos, crear un objeto con informacion
            // actualizada y devolverlo mediante this.props.onAdd(obj)
          >
            Agregar al Carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ItemCount;
