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
const {actions:{addItem}} = useContext(globalContext)
  //const initialValue = [{ id: 0, name: "Product" }];
  
  const [stateProduct, setStateProduct] = useState([ ]);
  //useState array void > initial state

  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    // [breakfast] compare and check changes in state data, render or just only change render
    setStateProduct(breakfast);
  }, [ ]);

  const addTodo = item => {
    addItem(item)
  };


  return (
   
      <section className="databreakfast">
        {stateProduct.map((element, index) =>
          <ButtonsBComponent
            key={index}
            {...element}
            addTodo={addTodo}

          />
        )}
        </section>
      
      
    
  )
};

export default BreakfastComponent;