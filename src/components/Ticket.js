import React, { useContext } from "react";
import "../css/Navbar.css";
import globalContext from "../store/globalContext";

const TicketItems = ({ img, name, price, quantity, icdel, id, total }) => {
  
  const {
    state: { order },
    actions: { deleteAllItems, deleteItem }
  } = useContext(globalContext);
  // console.log(order);

  // const deleteTicketList = item => {
  //   deleteAllItems(item);
  // };

  return (
    <aside className="ticketnav">
      <ul className="ticketnav-menu">
        <li className="nav-ticket">Cant.</li>
        <li className="nav-ticket">Producto</li>
        <li className="nav-ticket">Precio</li>
      </ul>

      <div className="select-product" >
        {order.map((item, index) => (
          <React.Fragment key={index}>
            <div key={index} className="boxed-ticket-product">
              <div key={name} className="list-name-product">{item.name}</div>
              <div key={total} className="list-total-product">$ {item.total}</div>
              <div key={quantity} className="list-cant-product">{item.quantity}</div>

              <div
                className="deleteItem"
                onClick={() =>
                  deleteItem({item})
                }
              >
                <img
                  className="image-icon-ticket"
                  src={item.icdel}
                  alt="imageicon"
                />
              </div>

            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="total-sum-ticket">
        Total ${" "}
        {order.reduce((prevValue, currentValue) => {
          return prevValue + currentValue.total;
        }, 0)}
      </div>

      <div className="select-button-ticket">
        <div
          className="button-cancel"
          onClick={() =>
            deleteAllItems({ img, name, price, quantity, icdel, id })
          }
        >
          <div className="cancel">Cancelar orden</div>
        </div>
        <div className="button-confirm">
          <div className="confirm">Confirmar orden</div>
        </div>
      </div>
    </aside>
  );
};

export default TicketItems;
