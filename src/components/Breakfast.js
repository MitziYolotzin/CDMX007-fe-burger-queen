import React, { useState, useEffect, useContext } from "react";
import '../css/Breakfast.css';
import menu from "../data/menu.json";
import ButtonsBComponent from './buttonsBreakfast'
import globalContext from "../store/globalContext";



const BreakfastComponent = () => {
//Pass globalContext, for consumers from provider.
//useContext passing the entire object, context object, name, os the actual context object that stores all the information
const {actions:{addItem}} = useContext(globalContext);
 //Mode value equal to (example syntax use, value:name{onChange})

const [stateProduct, setStateProduct] = useState([ ]);
/*useState array void > initial state
Deconstruct syntax array of useState, the firs element is the current value of the state,
The second value is a function to update the current value of the state */

  useEffect(() => {
// Returning a function
//sequence of one or more steps. Procedure, ruotine thath you want to component to execute every time the components renders
    setStateProduct(menu.breakfast);
  }, [ ]);
//Empty array where overwriting that and saying we don't want you to keep track of any state variables



//Function add items, props from provider
  const addItemTicket = item => {
    addItem(item)
  };


  return (
   
      <section className="databreakfast">
        {stateProduct.map((element, index) =>
          <ButtonsBComponent
            key={index}
            {...element}
            addItemTicket={addItemTicket}

          />
        )}
        </section>
      
      
    
  )
};

export default BreakfastComponent;