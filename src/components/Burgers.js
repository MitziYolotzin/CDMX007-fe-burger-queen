import React, { useState, useEffect } from "react";
import "../css/Breakfast.css";
import menu from "../data/menu.json";
import ButtonsBurgerComponent from "./buttonsBurgers";

const BurgerComponent = () => {
  const [stateProduct, setStateProduct] = useState([]);

  useEffect(() => {
    setStateProduct(menu.burgers);
  }, []);

  return (
    <div className="data-button-product">
      {stateProduct.map((item, index) => (
        <ButtonsBurgerComponent key={index} {...item} />
      ))}
    </div>
  );
};

export default BurgerComponent;
