import React, { useState } from 'react';


const ButtonsBurgerComponent = ({ img, name, price, addItemTicket }) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {

    addItemTicket({img, name, price});

    setActive(!active);
  }

return (
  <section className="row-buttons">
  <section className="container-buttons">
    <div className="boxed" onClick={handleClick}>
        <div className="burgersdata">
      <figure>
        <div className="circle-icon"></div>
          <img className="image-icon" src={img} alt="imageicon" />
      </figure>
  
        {active && 
        console.log('active button burgers')
        }
      
        <div className="name">{name}</div>       
        <div className="price">$ {price} </div>
        </div> 
    </div>

  </section>

  </section>
          
)
};



export default  ButtonsBurgerComponent;
