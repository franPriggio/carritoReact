import React from "react";
import "./ItemCount.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";

class ItemCount extends React.Component {
  //count management
  constructor(props) {
    super(props);
    this.state = {
      contador: this.props.initial,
      stock: this.props.stock,
    };
    console.log("this.state.contador construct: " + this.state.contador);
    console.log("this.state.stock construct: " + this.state.stock);
    this.addCounter = this.addCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
    this.updStock = this.updStock.bind(this);
  }

  addCounter() {
    console.log("this.state.contador add : " + this.state.contador);
    console.log("this.state.stock add : " + this.state.stock);
    if (this.state.contador < this.state.stock) {
      this.setState((prevState) => ({
        ...prevState,
        contador: prevState.contador + 1,
      }));
    }
  }

  decreaseCounter() {
    if (this.state.contador > 0 && this.state.stock > 0) {
      this.setState((prevState) => ({
        ...prevState,
        contador: prevState.contador - 1,
      }));
    }
  }

  updateCounter(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      contador: event.target.value,
    }));
  }

  updStock() {
    this.setState((prevState) => ({
      ...prevState,
      stock: prevState.stock - prevState.contador,
    }));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>Nombre item</Col>
        </Row>
        <Row className="countersClass mt-3 mb-3">
          <Col md={4}></Col>
          <Col md={4} className="countersClass">
            <Button variant="outline-info" onClick={this.decreaseCounter}>
              <Dash />
            </Button>
            <input
              type="Number"
              value={this.state.contador}
              onChange={this.updateCounter}
            ></input>
            <Button variant="outline-info" onClick={this.addCounter}>
              <Plus />
            </Button>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={this.updStock}>
              Agregar al Carrito
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ItemCount;
