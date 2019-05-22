import React, { useState, useEffect, useContext } from "react";
import '../css/Breakfast.css';
import menu from "../data/menu.json";
import ButtonsBComponent from './buttonsBreakfast'
import globalContext from "../store/globalContext";


// const breakfast = [
//   {
//     id: 0,
//     name: "Sandwich de jamón y queso",
//     price: '35',
//     img: "https://i.ibb.co/ynC9xHZ/sandjc.png",
    
//   },
//   {
//     id: 1,
//     name: "Jugo Natural",
//     price: '15',
//     img: "https://i.ibb.co/8mrd4MK/orangejuice.png",
//   },
//   {
//     id: 2,
//     name: "Café americano",
//     price: '20',
//     img: "https://i.ibb.co/nsj1GL0/americancoffe.png",
//   },
//   {
//     id: 3,
//     name: "Café con leche",
//     price: '28',
//     img: "https://i.ibb.co/GRPBm7j/coffeandmilk.png",
//   }
// ];


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