import "../ListaProductos/Item.css";
import { Button, Image } from "react-bootstrap";
import ItemCount from "../ListaProductos/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const [showItemCount, setShowItemCount] = useState(1);
  const [itemCountCounter, setitemCountCounter] = useState(true);

  return (
    <div>
      <div className="itemSpace">
        <Image fluid src={props.item.image} className="prodStyle"></Image>
        <h3>{props.item.name}</h3>
        <p>${props.item.price}</p>

        {showItemCount && (
          <ItemCount
            setShowItemCount={setShowItemCount}
            setitemCountCounter={setitemCountCounter}
            maxStock={10}
            initial={1}
          />
        )}

        {!showItemCount && (
          <>
            <p>
              Se han agregado{" "}
              <b>
                {" "}
                {itemCountCounter} {props.item.name}{" "}
              </b>
              al carrito
            </p>{" "}
            <Link to={"/cart"}>
              <Button>Terminar mi compra</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
