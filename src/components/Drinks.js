import React, { useState, useEffect, useContext } from "react";
import '../css/Breakfast.css';
import menu from "../data/menu.json";
import ButtonsDrinksComponent from './buttonsDrinks'
import globalContext from "../store/globalContext";


const DrinksComponent = () => {

const {actions:{addItem}} = useContext(globalContext);

const [stateProduct, setStateProduct] = useState([ ]);


  useEffect(() => {
// Returning a function

    setStateProduct(menu.drinks);
  }, [ ]);


//Function add items, props from provider
  const addItemTicket = item => {
    addItem(item)
  };


  return (
   
      <div className="data-button-product">
        {stateProduct.map((element, index) =>
          <ButtonsDrinksComponent
            key={index}
            {...element}
            addItemTicket={addItemTicket}

          />
        )}
        </div>
      
      
    
  )
};

export default DrinksComponent;