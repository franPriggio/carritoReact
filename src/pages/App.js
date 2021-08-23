import React from "react";
import "./styles/App.css";
import NavBar from "../Navegacion/NavBar";
import ItemListContainer from "../ListaProductos/ItemListContainer";
import ItemDetailContainer from "../DetalleProductos/ItemDetailContainer";
import NotFound from "../Router/NotFound";
import { Container, Row, Col } from "react-bootstrap";
import About from "./about";
import Contact from "./contact";
import SignUp from "./signup";
import SignIn from "./signin";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  // const { itemId } = useParams();
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/">
                  <ItemListContainer greeting="Personajes" />
                </Route>
                <Route exact path="/category/:status">
                  <ItemListContainer greeting="Personajes" />
                </Route>
                <Route exact path="/item/:charId">
                  <ItemDetailContainer />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/contact/:contactId" component={Contact} />
                <Route path="/signin" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="*" component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
