import React, { useState } from 'react';
//import img from '../assets/breakfast/sandjc.png';
//import  Navbar from "../components/Navbar";

const ButtonsBComponent = ({ img, name, price, addItemTicket }) => {

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
  <section className="row-butt">
  <section className="container-buttons">
    <section className="boxed" onClick={handleClick}>
  <section className="breakfastdata">
  <figure>
      <div className="circle-icon"></div>
          <img className="imageB" src={img} alt="imageicon" />
  </figure>
  
        {active && 
        console.log('active button')
        }
      
          <div className="name">{name}</div>       
          <div className="price">$ {price} </div>
        </section> 
      </section>

    </section>

    </section>
          
)
};



export default  ButtonsBComponent;
