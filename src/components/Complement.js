import React, { useState, useEffect } from "react";
import "../css/Breakfast.css";
import menu from "../data/menu.json";
import ButtonsComplementComponent from "./buttonsComplements";

const ComplementComponent = () => {
  const [stateProduct, setStateProduct] = useState([]);

  useEffect(() => {
    setStateProduct(menu.additional);
  }, []);

  return (
    <div className="data-button-product">
      {stateProduct.map((item, index) => (
        <ButtonsComplementComponent key={index} {...item} />
      ))}
    </div>
  );
};

export default ComplementComponent;
