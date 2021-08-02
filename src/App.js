import React from "react";
import "./App.css";
import NavBar from "./Navegacion/NavBar";
import ItemListContainer from "./ListaProductos/ItemListContainer";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "" };
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <ItemListContainer greeting="Suplementos" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
