import React, { useContext } from "react";
import "../css/Breakfast.css";
import globalContext from "../store/globalContext";

const ButtonsDrinksComponent = ({ img, name, price, quantity, icdel }) => {
  const {
    actions: { addItem }
  } = useContext(globalContext);


  return (
    <section className="row-buttons">
      <section className="container-buttons">
        <div
          className="boxed"
          onClick={() => addItem({ img, name, price, quantity, icdel })}
        >
          <div className="drinksdata">
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

export default ButtonsDrinksComponent;
