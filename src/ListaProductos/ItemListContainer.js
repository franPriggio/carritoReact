import React from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateCart: "",
    };
  }

  render() {
    let nombreGaleria = this.props.greeting;
    return (
      <div className="titleSpace">
        <h2>Galeria de Productos</h2>
        <p>{`Categoria ${nombreGaleria}`}</p>
        <ItemList />
      </div>
    );
  }
}

export default ItemListContainer;
