import React from 'react';
import { NavLink } from "react-router-dom";
import iconlogo from '../assets/ic_launcher.png';
import '../css/Navbar.css';

const Navbar = () => {

return (

    <section className="nav">
    <ul className="nav-menu">
{/* <p>Navigation</p> */}
{/* <NavLink to="/">Home</NavLink> */}
<img className="iconlogoB" src={iconlogo} alt="iconlogoB" />
<li><NavLink className="nav-menu-link" to="/Login">Login</NavLink></li>
<li><NavLink className="nav-menu-link" to="/Breakfast">Desayunos</NavLink></li>
<li><NavLink className="nav-menu-link" to ="/Burgers">Hamburguesas</NavLink></li>
<li><NavLink className="nav-menu-link" to ="/Drinks">Bebidas</NavLink></li>
<li><NavLink className="nav-menu-link" to ="/Complement">Complementos</NavLink></li>
</ul>
    </section>
);

}

export default Navbar;

