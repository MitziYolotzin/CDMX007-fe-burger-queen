import React from 'react';
import { NavLink } from "react-router-dom";
import iconlogo from '../assets/ic_launcher.png';
import '../css/Navbar.css';

const Navbar = () => {

return (
<section className="container-main">

    <section className="nav">
    <img className="iconlogoB" src={iconlogo} alt="iconlogoB" />
    <ul className="nav-menu">
{/* <p>Navigation</p> */}
{/* <NavLink to="/">Home</NavLink> */}

{/* <li><NavLink className="nav-menu-link" to="/Login">Login</NavLink></li> */}
<li><NavLink className="nav-menu-link" to ="/Breakfast">Desayunos</NavLink></li>
<li><NavLink className="nav-menu-link" to ="/Burgers">Hamburguesas</NavLink></li>
<li><NavLink className="nav-menu-link" to ="/Drinks">Bebidas</NavLink></li>
<li><NavLink className="nav-menu-link" to ="/Complement">Complementos</NavLink></li>
</ul>

{/* <aside className="ticketnav">
       <ul className="ticketnav-menu">
           <li className="nav-ticket">Cant.</li>
           <li className="nav-ticket">Producto</li>
           <li className="nav-ticket">Precio</li>
           <li className="nav-ticket">Total</li>
       </ul>
   </aside> */}

    </section>
    </section>

);

}


    
export default Navbar;


