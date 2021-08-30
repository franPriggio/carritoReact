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
import Cart from "../components/Carrito/Cart";
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
                  <ItemListContainer />
                </Route>
                <Route exact path="/category/:status">
                  <ItemListContainer />
                </Route>
                <Route exact path="/item/:charId">
                  <ItemDetailContainer />
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/:contactId" component={Contact} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/cart" component={Cart} />
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
