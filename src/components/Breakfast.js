import React, { useState, useEffect, useContext } from "react";
import '../css/Breakfast.css';

import ButtonsBComponent from './buttonsBreakfast'
import globalContext from "../store/globalContext";
//import img from '../assets/breakfast/sandjc.png';

// const Breakfast = () => {
//     return(
      
// <div>

// <h1>Breakfast</h1> 
// <button className="red" />
// <div className="boxed">
//   Sandwich
// </div>

// </div>
//     );
// };

// export default Breakfast;

const breakfast = [
  {
    id: 0,
    name: "Sandwich de jamón y queso",
    price: '35',
    img: "https://i.ibb.co/ynC9xHZ/sandjc.png",
    
  },
  {
    id: 1,
    name: "Jugo Natural",
    price: '15',
    img: "https://i.ibb.co/8mrd4MK/orangejuice.png",
  },
  {
    id: 2,
    name: "Café americano",
    price: '20',
    img: "https://i.ibb.co/nsj1GL0/americancoffe.png",
  },
  {
    id: 3,
    name: "Café con leche",
    price: '28',
    img: "https://i.ibb.co/GRPBm7j/coffeandmilk.png",
  }
];


const BreakfastComponent = () => {
//Pass global, for consumers from provider.
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
    setStateProduct(breakfast);
  }, [ ]);
/* Empty array where overwriting that and saying we don't want you to keep track of any state variables
[breakfast] compare and check changes in state data, render or just only change render
 It's posible can change the state them themselves, but none of those state changes for trigger this useEffect function to run again
 Whatever we put in, here is what we want to trigger a useEffect function, or an effect to run again */


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