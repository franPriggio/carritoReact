import "../ListaProductos/Item.css";
import { Button, Image } from "react-bootstrap";
import ItemCount from "../ListaProductos/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const { item, closeModal } = props;
  const [showItemCount, setShowItemCount] = useState(true);
  const [itemCountCounter, setItemCountCounter] = useState(1);

  return (
    <div>
      <div className="itemSpace">
        <Image fluid src={item.image} className="prodStyle"></Image>
        <h3>{item.name}</h3>
        <p>${item.price}</p>

        {showItemCount ? (
          <ItemCount
            setShowCount={setShowItemCount}
            setItemCounter={setItemCountCounter}
            maxStock={10}
            initial={1}
            item={item}
          />
        ) : (
          <>
            <p>
              Se han agregado{" "}
              <b>
                {" "}
                {itemCountCounter} {item.name}{" "}
              </b>
              al carrito
            </p>{" "}
            <Link to={"/cart"}>
              <Button>Ir a mi carrito</Button>
            </Link>
            <Button className="mt-2" onClick={closeModal}>
              Seguir comprando
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
