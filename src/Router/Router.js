import React from "react";
import "./Router.css";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import NotFound from "./NotFound";
import NavBar from "../Navegacion/NavBar";
import ItemListContainer from "../ListaProductos/ItemListContainer";
import { Container, Row, Col } from "react-bootstrap";

const Router = () => {
  const history = useHistory();

  return (
    <div className="Router">
      <Container fluid>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="*" component={NotFound} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Router;
