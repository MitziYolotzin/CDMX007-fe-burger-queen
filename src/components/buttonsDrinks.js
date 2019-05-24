import React from 'react';


const ButtonsDrinksComponent = ({ img, name, price, addItemTicket }) => {

 
return (
  
  <section className="row-buttons">
  <section className="container-buttons">
    <div className="boxed" onClick={() => addItemTicket({img, name, price})}>
        <div className="drinksdata">
      <figure>
        <div className="circle-icon"></div>
          <img className="image-icon" src={img} alt="imageicon" />
      </figure>
      
        <div className="name">{name}</div>       
        <div className="price">$ {price} </div>
        </div> 
    </div>

  </section>

  </section>
          
)
};



export default  ButtonsDrinksComponent;
