import React, { useContext, useEffect, useState } from "react";
import { CartCntxt } from "./CartContext";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { NavLink } from "react-router-dom";

const Carrito = () => {
  const { addItem, clear, carrito, removeItem, costoTotal, totalItems } =
    useContext(CartCntxt);

  useEffect(() => {
    console.log("CARRITO VIEW", JSON.stringify(carrito));
    console.log("totalItems: " + totalItems);
  }, [carrito]);

  return (
    <div>
      {totalItems === 0 ? (
        <div>
          <p>Tu carrito esta vacio!</p>
          <p>
            <NavLink to="/">Ir a catalogo</NavLink>
          </p>
        </div>
      ) : (
        <Container>
          <div className="cartItemsContainer">
            <h2>Carrito</h2>
            {carrito.map((item) => {
              return (
                <Row key={item.id} className="cartItem">
                  <Col>
                    <img alt={item.name} src={item.image} />
                  </Col>
                  <Col>
                    <h2>Nombre: {item.name}</h2>
                    <p>Precio: {item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </Col>
                  <Col>
                    <Button
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar de carrito
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </div>
          <h4>Precio total: ${costoTotal.toString()}</h4>
          <Button onClick={() => clear()}>Vaciar carrito</Button>
        </Container>
      )}
    </div>
  );
};

export default Carrito;
