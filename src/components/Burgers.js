import React, { useState, useEffect, useContext } from "react";
import '../css/Burgers.css';
import menu from "../data/menu.json";
import ButtonsBurgerComponent from './buttonsBurgers'
import globalContext from "../store/globalContext";


const BurgerComponent = () => {

const {actions:{addItem}} = useContext(globalContext);

const [stateProduct, setStateProduct] = useState([ ]);


  useEffect(() => {
// Returning a function

    setStateProduct(menu.burgers);
  }, [ ]);


//Function add items, props from provider
  const addItemTicket = item => {
    addItem(item)
  };


  return (
   
      <div className="data-burger">
        {stateProduct.map((element, index) =>
          <ButtonsBurgerComponent
            key={index}
            {...element}
            addItemTicket={addItemTicket}

          />
        )}
        </div>
      
      
    
  )
};

export default BurgerComponent;