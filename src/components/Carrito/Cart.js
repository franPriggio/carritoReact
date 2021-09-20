import React, { useContext, useEffect } from "react";
import { CartCntxt } from "./CartContext";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { getFirestore } from "../../Firestore/FirestoreConf";

const Carrito = () => {
  const { clear, carrito, removeItem, costoTotal, totalItems } =
    useContext(CartCntxt);

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const getRandomInt = () => {
    return Math.random();
  };

  const saveOrder = () => {
    const db = getFirestore();
    const itemCollection = db.collection("orders");

    //generate order data
    let buyer = {
      name: `Buyer ${makeid(5)}`,
      phone: getRandomInt().toString(),
      email: `te${makeid(5)}st@${makeid(5)}mail.com`,
    };
    let orderProducts = [];
    carrito.map((item) => {
      orderProducts.push({
        id: item.id,
        title: item.name,
        price: parseInt(item.price) * parseInt(item.quantity),
        quantity: item.quantity,
        unityPrice: item.price,
      });
    });
    var orderDate = new Date();
    var orderDateString = orderDate.toString();

    //order object
    let newOrder = {
      buyer,
      orderProducts,
      orderDateString,
      costoTotal,
    };

    //save order
    itemCollection
      .doc(makeid(8))
      .set(newOrder)
      .then(() => {
        console.log("Order successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {}, [carrito]);

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
          <div className="cartItemsContainer mt-4">
            <h2>Carrito</h2>
            <div className="emptyCart">
              <Button variant="link" onClick={() => clear()}>
                Vaciar carrito
              </Button>
            </div>
            {carrito.map((item) => {
              return (
                <Row key={item.id} className="cartItem">
                  <Col>
                    <img alt={item.name} src={item.image} />
                  </Col>
                  <Col>
                    <h2>{item.name}</h2>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </Col>
                  <Col>
                    <Button variant="link" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </Button>
                  </Col>
                  <Col>
                    <h6>Subtotal</h6>
                    <p>${item.subTotal}</p>
                  </Col>
                </Row>
              );
            })}
          </div>
          <Row className="mt-3">
            <Col xs={9}></Col>
            <Col cs={3}>
              <h4>Precio total: ${costoTotal.toString()}</h4>
              <Button
                variant="primary"
                className="mt-3 mb-3"
                onClick={() => {
                  saveOrder();
                }}
              >
                Finalizar Compra
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Carrito;
