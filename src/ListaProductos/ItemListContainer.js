import React from "react";
import "./ItemListContainer.css";

class ItemListContainer extends React.Component {
  render() {
    let nombreGaleria = this.props.greeting;
    return (
      <div class="titleSpace">
        <h2>Galeria de Productos</h2>
        <p>{`Categoria ${nombreGaleria}`}</p>
      </div>
    );
  }
}

export default ItemListContainer;
