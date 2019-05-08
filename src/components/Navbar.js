import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/ic_launcher.png';
import '../css/Navbar.css';

const Nav = () => {

return (

    <nav className="navmenu">
{/* <p>Navigation</p> */}
{/* <NavLink to="/">Home</NavLink> */}
<img className="logoB" src={logo} alt="logoB" />
<NavLink className="navmenulink" to="/Login">Login</NavLink>
<NavLink className="navmenulink" to="/Breakfast">Desayunos</NavLink>
<NavLink className="navmenulink" to ="/Burgers">Hamburguesas</NavLink>
<NavLink className="navmenulink" to ="/Drinks">Bebidas</NavLink>
<NavLink className="navmenulink" to ="/Complement">Complementos</NavLink>

    </nav>
);

}

export default Nav;