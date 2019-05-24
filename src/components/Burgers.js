import React, { useState, useEffect } from "react";
import '../css/Breakfast.css';
import menu from "../data/menu.json";
import ButtonsBurgerComponent from './buttonsBurgers'


const BurgerComponent = () => {

const [stateProduct, setStateProduct] = useState([ ]);


  useEffect(() => {
// Returning a function
    setStateProduct(menu.burgers);
  }, [ ]);


  return (
   
      <div className="data-button-product">
        {stateProduct.map((element, index) =>
          <ButtonsBurgerComponent
            key={index}
            {...element}
        

          />
        )}
        </div>
      
      
    
  )
};

export default BurgerComponent;