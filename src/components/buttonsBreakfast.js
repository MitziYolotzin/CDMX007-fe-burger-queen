import React, { useContext } from "react";
import "../css/Breakfast.css";
import globalContext from "../store/globalContext";

const ButtonsBreakfastComponent = ({ img, name, price, quantity, icdel }) => {
  //Pass globalContext, for consumers from provider.
  //useContext passing the entire object, context object, name, os the actual context object that stores all the information
  //Mode value equal to (example syntax use, value:name{onChange})
  const {
    actions: { addItem }
  } = useContext(globalContext);

  //Function add items, props from provider
  const addItemTicket = item => {
    addItem(item);
  };

  return (
    <section className="row-buttons">
      <section className="container-buttons">
        <div
          className="boxed"
          onClick={() => addItemTicket({ img, name, price, quantity, icdel })}
        >
          <div className="breakfastdata">
            <figure>
              <div className="circle-icon" />
              <img className="image-icon" src={img} alt="imageicon" />
            </figure>

            <div className="name">{name}</div>
            <div className="price">$ {price} </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ButtonsBreakfastComponent;
