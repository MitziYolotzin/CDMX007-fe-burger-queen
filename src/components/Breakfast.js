import React, { useState, useEffect } from "react";
import "../css/Breakfast.css";
import menu from "../data/menu.json";
import ButtonsBreakfastComponent from "./buttonsBreakfast";


const BreakfastComponent = () => {
  
  const [stateProduct, setStateProduct] = useState([]);
  /* [] initial state
Deconstruct syntax array of useState, the firs element is the current value of the state,
The second value is a function to update the current value of the state */

  useEffect(() => {
    // Returning a function, call back function
    //sequence of one or more steps. Procedure, ruotine thath you want to component to execute every time the components renders
    setStateProduct(menu.breakfast);
  }, []);
  //Empty array where overwriting that and saying we don't want you to keep track of any state variables
  //If put something is for we want to trigger a useEffect function or an effect to run again

  return (
    <div className="data-button-product">
      {stateProduct.map((item, index) => (
        <ButtonsBreakfastComponent key={index} {...item} />
      ))}
    </div>
  );
};

export default BreakfastComponent;
