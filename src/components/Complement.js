import React, { useState, useEffect } from "react";
import '../css/Breakfast.css';
import menu from "../data/menu.json";
import ButtonsComplementComponent from './buttonsComplements'


const ComplementComponent = () => {


const [stateProduct, setStateProduct] = useState([ ]);


  useEffect(() => {
// Returning a function
    setStateProduct(menu.additional);
  }, [ ]);



  return (
   
      <div className="data-button-product">
        {stateProduct.map((element, index) =>
          <ButtonsComplementComponent
            key={index}
            {...element}
           

          />
        )}
        </div>
      
      
    
  )
};

export default ComplementComponent;