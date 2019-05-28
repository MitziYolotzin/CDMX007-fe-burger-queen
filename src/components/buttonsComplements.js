import React, { useContext } from "react";
import "../css/Breakfast.css";
import globalContext from "../store/globalContext";

const ButtonsComplementComponent = (item) => {
  const {img, price, name} = item;

  const {
    actions: { addItem }
  } = useContext(globalContext);
  
  return (
    <section className="row-buttons">
      <section className="container-buttons">
        <div
          className="boxed"
          onClick={() => addItem(item)}
        >
          <div className="complementsdata">
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

export default ButtonsComplementComponent;
