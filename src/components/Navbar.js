import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {

return (

    <section>
{/* <p>Navigation</p> */}

<NavLink to="/">Home</NavLink>
<NavLink to="/Login">Login</NavLink>
<NavLink to="/Breakfast">Breakfast</NavLink>
<NavLink to ="/Burgers">Burgers</NavLink>

    </section>
);

}

export default Nav;