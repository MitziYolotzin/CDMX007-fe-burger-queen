import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import iconlogo from '../assets/ic_launcher.png';
import '../css/Navbar.css';
import globalContext from '../store/globalContext';

const Navbar = () => {

    const { state: { cart } } = useContext(globalContext)

    console.log(cart)
    return (
        <section className="container-main">

            <section className="nav">
                <img className="iconlogoB" src={iconlogo} alt="iconlogoB" />
                <ul className="nav-menu">
                    {/* <p>Navigation</p> */}
                    {/* <NavLink to="/">Home</NavLink> */}
                    {/* <li><NavLink className="nav-menu-link" to="/Login">Login</NavLink></li> */}
                    <li><NavLink className="nav-menu-link" to="/Breakfast">Desayunos</NavLink></li>
                    <li><NavLink className="nav-menu-link" to="/Burgers">Hamburguesas</NavLink></li>
                    <li><NavLink className="nav-menu-link" to="/Drinks">Bebidas</NavLink></li>
                    <li><NavLink className="nav-menu-link" to="/Complement">Complementos</NavLink></li>
                </ul>

                <section className="row">
                    <aside className="ticketnav">
                        <ul className="ticketnav-menu">
                            <li className="nav-ticket">Cant.</li>
                            <li className="nav-ticket">Producto</li>
                            <li className="nav-ticket">Precio</li>
                        </ul>
                            {cart.map((item, id) =>
                                <>
                                    <p key={id}>{item.name}</p>
                                    <br />
                                </>
                            )}
                        <section className="selectButton">
                            <section className="button-cancel">
                                <div className="cancel">Cancelar orden</div>
                            </section>
                            <section className="button-confirm">
                                <div className="confirm">Confirmar orden</div>
                            </section>
                            <div className="total">Total</div>
                        </section>
                    </aside>


                </section>
            </section>
        </section>

    );

}



export default Navbar;


