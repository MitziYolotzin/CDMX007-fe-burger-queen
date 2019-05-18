import React, { useState } from 'react';
//import img from '../assets/breakfast/sandjc.png';
//import  Navbar from "../components/Navbar";

const ButtonsBComponent = ({ img, name, price, addTodo, index }) => {

  const [active, setActive] = useState(false);
//El estado active y setActive que hace un cambio o manipulacion del estado
//useState con parametro inicial que creamos
  const handleClick = () => {
    //funcion que va a actualizar los valores del estado
    //cambia el estado que tienen inicialmente active
    addTodo({img, name, price})
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
        <section className="generic">
        {/* <Navbar title="ticketnav" /> */}
        
        <h1>Pedido</h1>
        </section>
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
