import React, { useState, useEffect } from "react";
import "../css/Breakfast.css";
import menu from "../data/menu.json";
import ButtonsDrinksComponent from "./buttonsDrinks";

const DrinksComponent = () => {
  const [stateProduct, setStateProduct] = useState([]);

  useEffect(() => {
    setStateProduct(menu.drinks);
  }, []);

  return (
    <div className="data-button-product">
      {stateProduct.map((item, index) => (
        <ButtonsDrinksComponent key={index} {...item} />
      ))}
    </div>
  );
};

export default DrinksComponent;
