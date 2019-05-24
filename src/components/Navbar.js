import React from 'react';
import { NavLink } from "react-router-dom";
import iconlogo from '../assets/ic_launcher.png';
import '../css/Navbar.css';
import TicketItems from '../components/Ticket';

const Navbar = () => {

    return (
        <section className="row">
       

            <div className="nav">
                <img className="iconlogoB" src={iconlogo} alt="iconlogoB" />
                <ul className="nav-menu">
                    <li><NavLink className="nav-menu-link" to="/Breakfast">Desayunos</NavLink></li>
                    <li><NavLink className="nav-menu-link" to="/Burgers">Hamburguesas</NavLink></li>
                    <li><NavLink className="nav-menu-link" to="/Drinks">Bebidas</NavLink></li>
                    <li><NavLink className="nav-menu-link" to="/Complement">Complemento</NavLink></li>
                </ul>
           </div>
        
           <div className="ticket-align">
           <TicketItems />
           </div>

        </section>

    );

}


export default Navbar;


