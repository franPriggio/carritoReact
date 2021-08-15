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

    this.addCounter = this.addCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
    this.updStock = this.updStock.bind(this);
  }

  //sumo 1 del stock
  addCounter() {
    if (+this.state.contador < +this.state.stock) {
      this.setState((prevState) => ({
        ...prevState,
        contador: prevState.contador + 1,
      }));
    }
  }

  //resto 1 del stock
  decreaseCounter() {
    if (+this.state.contador > 0 && +this.state.stock > 0) {
      this.setState((prevState) => ({
        ...prevState,
        contador: prevState.contador - 1,
      }));
    }
  }

  //actualizo contador segun el input de usuario
  updateCounter(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      contador: +event.target.value,
    }));
  }

  //resto del stock total al agregar al carrito
  updStock() {
    this.setState((prevState) => ({
      ...prevState,
      stock: prevState.stock - prevState.contador,
    }));
  }

  //si al restar del stock en updStock()
  //el contador supera el sotck restante, actualizo el contador
  //al mismo numero de stock
  componentDidUpdate() {
    if (this.state.contador > this.state.stock) {
      this.setState((prevState) => ({
        ...prevState,
        contador: this.state.stock,
      }));
    }
  }

  render() {
    return (
      <Container>
        <Row xs="auto" className="itemClass pt-3 pb-3">
          <Col xs={12} className="pb-3 back tituloItem"></Col>
          <Col xs={12} className="countersClass back ">
            {/* <Button variant="outline-info"> */}
            <Dash onClick={this.decreaseCounter} class="itemCounter" />
            {/* </Button> */}
            <input
              class="itemInput counterBack"
              type="Number"
              value={this.state.contador}
              onChange={this.updateCounter}
            ></input>
            {/* <Button variant="outline-info" > */}
            <Plus onClick={this.addCounter} class="itemCounter" />
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
                this.updStock();
                if (this.state.contador > 0) {
                  this.props.onAdd(`Se agregaron ${this.state.contador}`);
                }
              }}
            >
              Agregar al Carrito
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ItemCount;
