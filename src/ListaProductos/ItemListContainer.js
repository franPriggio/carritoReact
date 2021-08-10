import React from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      updateCart: "",
    };
  }

  addToCart(mensaje) {
    this.setState(
      (prevState) => ({
        ...prevState,
        updateCart: mensaje,
      }),
      () => {
        alert(mensaje);
      }
    );
  }

  render() {
    let nombreGaleria = this.props.greeting;
    return (
      <div className="titleSpace">
        <h2>Galeria de Productos</h2>
        <p>{`Categoria ${nombreGaleria}`}</p>
        <ItemCount stock={10} initial={2} onAdd={this.addToCart} />
      </div>
    );
  }
}

export default ItemListContainer;
