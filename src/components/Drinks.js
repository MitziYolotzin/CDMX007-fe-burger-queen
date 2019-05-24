import React, { useState, useEffect } from "react";
import '../css/Breakfast.css';
import menu from "../data/menu.json";
import ButtonsDrinksComponent from './buttonsDrinks'


const DrinksComponent = () => {

const [stateProduct, setStateProduct] = useState([ ]);


  useEffect(() => {
// Returning a function
    setStateProduct(menu.drinks);
  }, [ ]);



  return (
   
      <div className="data-button-product">
        {stateProduct.map((element, index) =>
          <ButtonsDrinksComponent
            key={index}
            {...element}
            

          />
        )}
        </div>
      
      
    
  )
};

export default DrinksComponent;