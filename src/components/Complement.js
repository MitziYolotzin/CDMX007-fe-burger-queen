import React, { useState, useEffect, useContext } from "react";
import '../css/Complement.css';
import menu from "../data/menu.json";
import ButtonsComplementComponent from './buttonsComplements'
import globalContext from "../store/globalContext";


const ComplementComponent = () => {

const {actions:{addItem}} = useContext(globalContext);

const [stateProduct, setStateProduct] = useState([ ]);


  useEffect(() => {
// Returning a function

    setStateProduct(menu.additional);
  }, [ ]);


//Function add items, props from provider
  const addItemTicket = item => {
    addItem(item)
  };


  return (
   
      <div className="data-complements">
        {stateProduct.map((element, index) =>
          <ButtonsComplementComponent
            key={index}
            {...element}
            addItemTicket={addItemTicket}

          />
        )}
        </div>
      
      
    
  )
};

export default ComplementComponent;