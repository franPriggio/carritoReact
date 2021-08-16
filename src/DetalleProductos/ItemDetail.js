import "../ListaProductos/Item.css";
import { Image } from "react-bootstrap";

const ItemDetail = (props) => {
  return (
    <div>
      <div className="itemSpace">
        <Image fluid src={props.item.image} className="prodStyle"></Image>
        <h3>{props.item.name}</h3>
        <p>${props.item.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
