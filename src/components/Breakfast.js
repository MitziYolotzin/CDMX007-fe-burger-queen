import React  from 'react';
import '../css/Breakfast.css';

import ButtonsBComponent from './buttonsB.js'
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

const BreakfastComponent = () => {
  const breakfast = [
    {
      name: "Sandwich de jamón y queso",
      price: '35',
      img: "../assets/breakfast/sandjc.png",
      
    },
    {
      name: "Jugo Natural",
      price: '15',
      img: "../assets/breakfast/orangejuice.png",
    },
    {
      name: "Café americano",
      price: '20',
      img: "../assets/breakfast/americancoffe.png",
    },
    {
      name: "Café con leche",
      price: '28',
      img: "../assets/breakfast/coffeandmilk.png",
    }
  ];

  return (
   
      <section className="databreakfast">
        {breakfast.map((element, item) =>
          <ButtonsBComponent
            key={item}
            {...element}
          />
        )}
        </section>
      
      
    
  )
};

export default BreakfastComponent;