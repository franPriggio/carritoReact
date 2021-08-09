import React from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";

class ItemListContainer extends React.Component {
  render() {
    let nombreGaleria = this.props.greeting;
    return (
      <div className="titleSpace">
        <h2>Galeria de Productos</h2>
        <p>{`Categoria ${nombreGaleria}`}</p>
        <ItemCount stock="10" initial="2" />
      </div>
    );
  }
}

export default ItemListContainer;
