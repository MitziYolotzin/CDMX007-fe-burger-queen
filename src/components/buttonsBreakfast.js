import React, { useState } from 'react';
import '../css/Breakfast.css';


const ButtonsBreakfastComponent = ({ img, name, price, addItemTicket }) => {

  const [active, setActive] = useState(false);
//The active and setActive state that makes a change or manipulation of the state
//useState with initial parameter that we create

  const handleClick = () => {
// function that will update the state values
  addItemTicket({img, name, price});
// change the state they have initially active
    setActive(!active);
  }

return (
  <section className="row-buttons">
  <section className="container-buttons">
    <div className="boxed" onClick={handleClick}>
        <div className="breakfastdata">
      <figure>
        <div className="circle-icon"></div>
          <img className="image-icon" src={img} alt="imageicon" />
      </figure>
  
        {active && 
        console.log('active button breakfast')
        }
      
        <div className="name">{name}</div>       
        <div className="price">$ {price} </div>
        </div> 
    </div>

  </section>

  </section>
          
)
};



export default  ButtonsBreakfastComponent;
