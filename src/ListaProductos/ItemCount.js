import React, { useEffect, useState } from "react";
import "./ItemCount.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";

const ItemCount = (props) => {
  const { initial, maxStock, setCantidadCount, setShowItemCount } = props;
  const [contador, setContador] = useState(initial);
  const [stock, setStock] = useState(maxStock);

  const setCant = () => {
    setCantidadCount(contador);
  };

  const setShow = () => {
    setShowItemCount(false);
  };
  //sumo 1 del stock
  function addCounter() {
    if (+contador < +stock) {
      const newCounter = contador + 1;
      setContador(newCounter);
      // this.setState((prevState) => ({
      //   ...prevState,
      //   contador: prevState.contador + 1,
      // }));
    }
  }

  //resto 1 del stock
  function decreaseCounter() {
    if (+contador > 0 && +stock > 0) {
      const newCounter = contador - 1;
      setContador(newCounter);
    }
  }

  //actualizo contador segun el input de usuario
  function updateCounter(event) {
    event.preventDefault();
    const newCounter = +event.target.value;
    setContador(newCounter);
  }

  //resto del stock total al agregar al carrito
  function updStock() {
    const newStock = stock - contador;
    setStock(newStock);
  }

  //si al restar del stock en updStock()
  //el contador supera el sotck restante, actualizo el contador
  //al mismo numero de stock
  useEffect(() => {
    if (contador > stock) {
      setContador(stock);
    }
  }, [contador]);

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
            onClick={() => {
              // podria llamar funcion local que actualice el stock
              // y haga demas calculos, crear un objeto con informacion
              // actualizada y devolverlo mediante this.props.onAdd(obj)
              updStock();
              if (contador > 0) {
                setCant();
                setShow();
              }
            }}
          >
            Agregar al Carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ItemCount;
