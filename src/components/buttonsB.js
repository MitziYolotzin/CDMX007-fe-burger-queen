import React from 'react';
//import img from '../assets/breakfast/sandjc.png';

const ButtonsBComponent = ({ img, name, price }) => (
    <section className="boxed">
  <section className="breakfastdata">
  
  <figure>
      <div className="circle-icon"></div>
        {/* <img className="imageB" src={img} alt="imageicon" /> */}
        </figure>
          <div className="name">{name}</div>       
            <div className="price">$ {price} pesos</div>

            </section> 
            </section>
);



export default  ButtonsBComponent;
