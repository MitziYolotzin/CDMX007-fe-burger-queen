import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Burgers from "./components/Burgers";
//import Error from "./components/Error";
import Nav from "./components/Navbar";
//import logo from './logo.svg';
import './App.css';
//import logoBQ from './logoBQ.png';

// p1 Prueba Ruta1
/*const newRoute = () => {
  return (
<section>
  <p>New Route</p>
</section>
  );
} */

class App extends Component {
render (){
  return(

    <BrowserRouter>
<Nav />
    {/* <Route path="/new" component={newRoute} /> */}
<Switch>
    <Route path="/" component={Home} exact />
    
    <Route path="/Breakfast" component={Breakfast} />
    <Route path="/Burgers" component={Burgers} />
{/* <Route component={Error} /> */}
</Switch>


    </BrowserRouter>

  );
}

}

export default App;